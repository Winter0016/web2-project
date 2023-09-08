import "./index.css"

const Picture = (props) => {
    const { data } = props;
    console.log('HLLLO')
    return (
    <div className="pfirst">
        <div className="psecond">
            <img src={data.image}/>
            <div className="font">
                {data.description}Read more
            </div>
        </div>
    </div>
    );
};

export default Picture;