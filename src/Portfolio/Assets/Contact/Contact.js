// import { Form, Button } from "react-bootstrap";
import './Contact.css';



export default function Contact() {

  return (

    <div className="section-5">
      <div className="col-div-6">
        <div className="content-1">
          <p className="about-pss">Have any Question ?</p>
          <p className="about-pss1">Let's Get In Touch</p>
          
            <input type="text" className="input-1" placeholder="Name"/>
              <input type="email" className="input-1" placeholder="Email"/>
                <input type="text" className="input-2" placeholder="Subject"/>
                  <textarea placeholder="Message"></textarea>
                  <button>Send Message</button>
                
              </div>
            </div>
            <div className="col-div-6">
             
            </div>
            <div className="clearfix"></div>
        </div>



)
}