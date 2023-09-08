import "./index.css"

const Picture = (props) => {
    const { data } = props;
    console.log('HLLLO')
    return (
    <div className="container3">
        <div className="box1">
            <div className="p1">
                <img src={data.image}/>
                <div className="font">
                    {data.description}Read more
                </div>
            </div>
        </div>
    </div>
    );
};

export default Picture;