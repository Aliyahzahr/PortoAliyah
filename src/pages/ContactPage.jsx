import Layout from "../layout/Layout";
import { useNavigate } from "react-router";

const ContactPage = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <h1>Hello Contact</h1>
            <button onClick={() => navigate('/product')}>Product</button>
        </Layout>
    )
}

export default ContactPage;