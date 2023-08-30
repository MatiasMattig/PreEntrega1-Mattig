import { Link } from "react-router-dom"

const ItemCard = ({item}) => {

    return (
        <div className='col-3 m-3 container-prod'>
            <h5 className="marca">{item.marca}</h5>
            <h3 className="nombre">{item.nombre}</h3>
            <img src={item.img} alt={item.nombre} />
            <p>Precio: ${item.precio}</p>

            {
                item.stock < 10 && <p>Quedan solo {item.stock} unidades!</p>
            }

            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver mas</Link>
        </div>
    )
}

export default ItemCard