import './index.css'

const Patron = (props) => {
    const { data } = props;

    return (
        <div className='information'>
            <div className='Name1'> Patron {data.id}:</div>
            <div className='Name'> {data.name}</div>
            <div className='Name'> {data.donation}</div>
            <div className ='Name2'>{data.comment}</div>
        </div>
    );
};

export default Patron;