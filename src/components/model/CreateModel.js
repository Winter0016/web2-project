import { useState } from "react";
import { useDispatch, Provider } from "react-redux";
import { createPatron } from "../../container/Patron/actions";
import { Link } from "react-router-dom";


const CreateModel = ({ isOpen, setOpen, isActive }) => {
    const dispatch = useDispatch();

    const [patronData, setPatronData] = useState({
        name : {
            value: "",
            isError: false,
        },
        
        donation: {
            value: "",
            isError: false,
        },

        comment: {
            value: "",
            isError: false,
        },
    });

    const handleClose = (event) => {
        if(event.target === event.currentTarget) {
            setOpen(false);
        }
    };

    const handlerSubmit = (event) => {
        const data = {
            name: patronData.name.value,
            donation: patronData.donation.value,
            comment: patronData.comment.value,
        };
        if(data.name !== "" && data.donation !== "" && data.comment !== "") {
            dispatch(createPatron(data));
            setOpen(false);
        }
    };

    const onChangeInputHandler = (event) => {
        const { name, value} = event.target;
        const newPatronData = {
            ...patronData,
            [name]: {
                ...patronData[name],
                value: value,
            },
        };
        setPatronData(newPatronData);
    };

    
    
      return (
        <div className="f1">
            <form className="commentform">

                <img className="nam"src="assets/donate-name.png"/>
                <input 
                    type="text" 
                    placeholder="Your name please" 
                    className="name" required
                    value={patronData.name.value}
                    error={false}
                    onChange={onChangeInputHandler}
                >
                </input>
                
                <img className="don"src="assets/donate-donation.png"/>
                <input 
                    type="number"
                    placeholder="0" 
                    className="donate" required
                    value={patronData.donation.value}
                    onChange={onChangeInputHandler}
                >
                </input>       
                
                <img className="don"src="assets/donate-comment.png"/>   
                <textarea 
                    className="comment"
                    placeholder="Please share us your thoughts."  
                    rows="4" cols="50" required
                    value={patronData.comment.value}
                    onChange={onChangeInputHandler}
                >
                </textarea>             
                
                <div className="submit-container">
                    <Link to="/sucessfully-submitted">
                        <button type="submit" className="submit" onClick={handlerSubmit}>Submit</button>
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