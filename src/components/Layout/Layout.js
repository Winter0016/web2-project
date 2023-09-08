import Navbar from "../Navbar/navbar.js";
import Footer from "../Footer/footer.js";
import('./Layout.css')
const Layout = (props) => {
    return (
        <div className="layout">
            <Navbar></Navbar>
            <div>{props.children}</div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;