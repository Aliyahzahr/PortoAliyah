import { useParams } from "react-router";

const DetailPage = () => {
    const { id } = useParams();

    return (
        <>
            <h1>Hello Detail Product</h1>
            <p>id : { id }</p>
        </>
    )
}

export default DetailPage;
