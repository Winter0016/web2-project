const Picture = (props) => {
    const { data } = props;
    return (
    <div className="container3">
        <div className="box1">
            <div className="p1">
                <img src={data.image}/>
                <div className="font">
                    <nav>{data.description}<Link to="/moreblogs">Read more</Link></nav>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Picture;