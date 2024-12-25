
import { Link } from "react-router";

const ProductPage = () => {
    return (
        <>
            <h1>Hello Product</h1>
            <Link to={'/product/detail/2'} >See Product</Link>
        </>
    )
}

export default ProductPage;
