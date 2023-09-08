import Picture from "./Picture";
import Pagination from "../Pagination";
import { changePage } from "../../container/Patron/actions";
import { useDispatch, useSelector, Provider } from "react-redux";
import { getListPictureApi } from "../../api/Pictures";

const pictures = await getListPictureApi();
const pages = pictures.pages
const myData = pictures.data

const ListPictures = () => {
    const changePageHandler = (value) => {
        changePage(value);
    }

    //const { pictures, pages } = useSelector((state) => state.PictureReducer);

    return (
        <div>
            <div className="blogs2">
                {myData.map((item) => (
                    <Picture
                        data = {item}
                    />
                ))}    
            </div>

{/*            <div className="pagination">
                <Pagination
                    currentPage = {pages.current}
                    totalCount = {pages.total * 5}
                    pageSize={5}
                    onPageChange={(page) => changePageHandler(page)}
                />
            </div>
*/}
        </div>
    );
};

export default ListPictures;