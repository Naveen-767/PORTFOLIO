import './Home.css';
// import { BsFacebook, BsWhatsapp, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import KING from './IMG/IMG-20221012-WA0004.jpg'




function Home() {
    return (
        <div className="Homecontainer">
            <div className="main">
                <div className="section-1">
                    <div className="col-div-6">
                        <h2 className="head"><span>Naveen  G</span></h2>
                        <br />
                        <p className="para">I am Web Devoloper from Chennai,Tamilnadu,India
                            and currently living in Neelangarai.
                            I enjoy Building everything from small business site to rich intrective web pages
                            If you are a seeing an employer to looking to hire you can get in touch with me Hire</p>
                            <button className='bs'>I am looking to Hire </button>
                    </div>
                    <div className="col-div-6">
                        <span className="shape-square"></span>
                        <span className="shape-triangle"></span>
                        <span className="shape-triangle1"></span>
                        <span className="shape-square1"></span>
                        <div className="slider-image">
                            {/* <img src="images/boy.png"> */}
                            <img className="imag" src={KING} alt="joker"></img>

                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

        </div>
    );
}

export default Home;
