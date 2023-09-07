import { Link, useHistory } from "react-router-dom";
import ListPatrons from "../../components/ListPatrons";

import ('./patron.css')
const patron = () =>{
    return(
        
        <div className='patron1'>
            <div className='patron2'>
                    <ListPatrons />
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
}

export default patron;