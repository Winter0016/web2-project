import { Link, useHistory } from "react-router-dom";
import ('./form.css')
const form = () =>{
    return(
        <div className="f1">
            <form className="commentform">
    
                <img className="nam"src="assets/donate-name.png"/>
                <input type="text" className="name" required></input>
                <img className="don"src="assets/donate-donation.png"/>
                <input type="number" className="donate" required></input>       
                <img className="don"src="assets/donate-comment.png"/>   
                <textarea className="comment"  rows="4" cols="50" required></textarea>             
                <div className="submit-container">
                    <Link to="/sucessfully-submitted"><input type="submit" className="submit" value="Submit"></input></Link>
                </div>
            </form>
            <div className="Back-container Back-container2">
                <div className='Back'>
                    <Link to="/"><img src='/assets/backtoblog.png'/></Link>
                </div>
           </div>
        </div>
    );
}

export default form;