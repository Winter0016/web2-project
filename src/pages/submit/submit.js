import { Link, useHistory } from "react-router-dom";
import  ('./submit.css')
const SUBB = ()=>{
    return (
        <div className='sub1'>
           <div className='wibu'>
                <img src='/assets/wibu.png'/> 
           </div>
           <div className="Back-container">
                <div className='Back'>
                    <Link to="/"><img src='/assets/backtoblog.png'/></Link>
                </div>
           </div>
        </div>
    )
}

export default SUBB;
