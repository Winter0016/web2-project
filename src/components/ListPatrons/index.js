import { Link } from "react-router-dom";
import Patron from "./Patron";
import Pagination from "../Pagination";
import { changePage } from "../../container/Patron/actions";
import { useDispatch, useSelector, Provider } from "react-redux";
//import { BlogContextProvider } from "../../context/blogContextProvider";

const ListPatronsWrapper = () => {
    return (
        <Provider store={null}>
            <ListPatrons />
        </Provider>
    )
}

const ListPatrons = () => {

    const { patrons, pages } = useSelector((state) => state.patronReducer);
    const dispatch = useDispatch();

    const changePageHandler = (value) => {
        dispatch(changePage(value));
    };

    return (
        <div className='patron1'>
            <div className='patron2'>
                <div className='board'>
                    <div className='categories'>
                        <div>        
                        </div>
                        <div className="one">
                            <img src="/assets/letter1.png"/>
                        </div>
                        <div className="two">
                            <img src="/assets/letter2.png"/>
                        </div>
                        <div className="three">
                            <img src="/assets/letter3.png"/>
                        </div>
                    </div>
                    {patrons.map((item) => (
                        <Patron data = {item} />
                    ))}
                </div>

                <div className="pagination">
                    <Pagination
                        currentPage={pages.current}
                        totalCount={pages.total * 5}
                        pageSize={5}
                        onPageChange={(page) => changePageHandler(page)}
                    />
                </div>

                <div className="patron3">
                    <Link to="/sign"><img src="/assets/become.png"/></Link>
                </div>
            </div>
            <div className="Back-container Back-container2">
                <div className='Back'>
                    <Link to="/"><img src='/assets/backtoblog.png'/></Link>
                </div>
           </div>
        </div>
    );
};

export default ListPatrons;