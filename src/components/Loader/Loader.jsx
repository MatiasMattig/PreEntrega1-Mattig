import { Spinner } from "react-bootstrap";
import './Loader.scss'

const Loader = () => {

    return (
        <div className="loader">
            <Spinner animation="grow" variant="primary"/>
        </div>
    )
}

export default Loader