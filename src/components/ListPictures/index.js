import Picture from "./Picture";
import Pagination from "../Pagination";
import { changePage } from "../../container/Patron/actions";
import { useDispatch, useSelector, Provider } from "react-redux";
import { getListPictureApi } from "../../api/Pictures";
const pictures = await getListPictureApi();
const pages = pictures.pages
const myData = pictures.data

import ("./list.css")
const ListPictures = () => {
    const changePageHandler = (value) => {
        changePage(value);
    }

    //const { pictures, pages } = useSelector((state) => state.PictureReducer);

    return (
        <div className="BLOG2">
                {myData.map((item) => (
                    <Picture
                        data = {item}
                    />
                ))}    
        </div>
    );
};

export default ListPictures;