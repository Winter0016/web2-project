import { useState } from "react";
import { useDispatch, Provider } from "react-redux";
import { createPatron } from "../../container/Patron/actions";
import { Link } from "react-router-dom";
import { createPatronApi } from "../../api/Patrons";


const CreateModel = () => {   
      return (
        <div className="f1">
            <form className="commentform">

                <img className="nam"src="assets/donate-name.png"/>
                <input 
                    type="text" 
                    placeholder="Your name please" 
                    className="name" required
                    value=''
                >
                </input>
                
                <img className="don"src="assets/donate-donation.png"/>
                <input 
                    type="number"
                    placeholder="0" 
                    className="donate" required
                    value=''
                >
                </input>       
                
                <img className="don"src="assets/donate-comment.png"/>   
                <textarea 
                    className="comment"
                    placeholder="Please share us your thoughts."  
                    rows="4" cols="50" required
                    value=''
                >
                </textarea>             
                
                <div className="submit-container">
                    <Link to="/sucessfully-submitted">
                        <button type="submit" className="submit">Submit</button>
                    </Link>
                </div>
            
            </form>
            <div className="Back-container Back-container2">
                <div className='Back'>
                    <Link to="/"><img src='/assets/backtoblog.png'/></Link>
                </div>
            </div>
        </div>
    );
};

export default CreateModel;