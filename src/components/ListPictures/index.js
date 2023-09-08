import Picture from "./Picture";
import Pagination from "../Pagination";
import { changePage } from "../../container/Patron/actions";
import { useDispatch, useSelector, Provider } from "react-redux";

const ListPicturesWrapper = () => {
    return (
        <Provider store={null}>
            <ListPictures />
        </Provider>
    )
}

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