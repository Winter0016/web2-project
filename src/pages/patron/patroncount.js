import ('./patroncount.css')
const INFOR = (props)=>{
    const {data2}=props;
    return (
        <div className='pat1'>
            <div className='patname'> Patron: {data2.index}</div>
        </div>
    )
}

export default INFOR;
