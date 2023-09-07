import Picture from "./Picture";
import Pagination from "../Pagination";
import { useDispatch, useSelector } from "react-redux";

const ListPictures = () => {

    const { pictures, pages } = useSelector((state) => state.PictureReducer);
    const dispatch = useDispatch();

    const changePageHandler = (value) => {
        dispatch(changePage(value));
    };

    return (
        <div>
            <div className="blogs2">
                {pictures.map((item) => {
                    <Picture
                        data = {item}
                    />
                })}    
            </div>

            <div className="pagination">
                <Pagination
                    currentPage = {pages.current}
                    totalCount = {pages.total * 5}
                    pageSize={5}
                    onPageChange={(page) => changePageHandler(page)}
                />
            </div>
        </div>
    );
};

export default ListPictures;