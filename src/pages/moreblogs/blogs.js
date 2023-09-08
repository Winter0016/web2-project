import ListPictures from "../../components/ListPictures";
import { Link, useHistory } from "react-router-dom";
import('./blogs.css')
const blog = () => {
    return (
        <div className='blogs1'>
            <ListPictures/>
                
            <div className="Back-container Back-container2">
                <div className='Back'>
                    <Link to="/"><img src='/assets/backtoblog.png'/></Link>
                </div>
            </div>
        </div>
    );
};

export default blog;