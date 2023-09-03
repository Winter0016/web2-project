import { Link, useHistory } from "react-router-dom";
import IN from "./info.js";
import { listinfo } from "../utils/data.js";

import ('./patron.css')
const homepage = () =>{
    return(
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
                    {listinfo.map((item) => (
                        <IN data = {item} />
                    ))}
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
}

export default homepage;