import { Link, useHistory } from "react-router-dom";
import ('./homepage.css')
const homepage = () =>{
    return(
        <div class="box">
            <div className="container1">
                <img src="/assets/intro2.png"/>
            </div>
            <div className="container2">
                <div className="pic1">
                    <img src="/assets/viewer.png"/>
                </div>
                <div className="pic1">
                    <img src="/assets/mystory.png"/>
                </div>
                <div className="pic2">
                    <div className="pic1 picspecial">
                        <img src="/assets/tokyo.png"/>
                        <Link to="/patrons"><div className="pat"><img src="/assets/button1.png"/></div></Link>
                    </div>
                    <div className="pic1">
                        <img src="/assets/doanvan.png"/>
                    </div>
                </div>
            </div>
            <div className="my">
                <img src="/assets/mypixel.png"/>
            </div>
            <div className="container3">
                <div className="box1">
                    <div className="p1">
                        <img src="/assets/picture1.png"/>
                        <div className="font">
                            Since then, everything had been a routine until now. Thien was wondering, for what reason that...<nav><Link to="/moreblogs">Read more</Link></nav>
                        </div>
                    </div>
                    <div className="p1">
                        <img src="/assets/picture2.png"/>
                        <div className="font">
                            Thien was quite shock, but fast to calm himself down. He had never stopped being surprised whenever..<nav><Link to="/moreblogs">Read more</Link></nav>
                        </div>
                    </div>
                    <div className="p3">
                        <img src="/assets/picture3.png"/>
                        <div className="font">
                            A first day month, no moon, no clouds. All the stars were shining on above. The fall skyline was really...<nav><Link to="/moreblogs">Read more</Link></nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-see">
                <div className="see">
                    <Link to="/moreblogs"><img src="/assets/seeall.png"/></Link>
                </div>
            </div>
        </div>
    );
}

export default homepage;