import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link, Navigate } from "react-router-dom"

const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handelInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            cliente: values,
            items: cart.map(item => ({id: item.id, precio: item.precio, cantidad: item.cantidad, nombre: item.nombre})),
            total: totalCompra(),
            fyh: new Date()
        }

        const orderRef = collection(db, "orders")
        addDoc(orderRef, orden)
            .then((doc) => {
                console.log(doc.id)
                vaciarCarrito()
                setOrderId(doc.id)
            })
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2 className="text-4xl">Tu compra se registró exitosamente!</h2>
                <hr/>
                <p>Tu numero de orden es: <strong>{orderId}</strong></p>

                <Link to="/">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0 ) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    onChange={handelInputChange}
                    value={values.nombre}
                    type="text"
                    className="form-control my-2"
                    placeholder="Nombre"
                    name="nombre"
                />

                <input
                    onChange={handelInputChange}
                    value={values.direccion}
                    type="text"
                    className="form-control my-2"
                    placeholder="Dirección" 
                    name="direccion"
                />

                <input
                    onChange={handelInputChange}
                    value={values.email}
                    type="email"
                    className="form-control my-2"
                    placeholder="Tu email"
                    name="email"
                />

                <button className="btn btn-success">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout