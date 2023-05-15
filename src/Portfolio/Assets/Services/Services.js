import'./Services.css';
function Services() {
  return (
    <div className="Servicescontainer">
      <div className="main">
        <div className="section-3">
          <div className="col-div-6">
            <div className="content-1">
              <p className="about-ps">Fresher</p>
              <p className="about-ps1">our Services & skills</p>
              <br /><br />
              <p className="progress-p">Adope Photo Shop  <span>50%</span></p>
              <div id="progress"></div>
              <p className="progress-p">Web Design <span>90%</span></p>
              <div id="progress1"></div>
              <p className="progress-p">HTML <span>95%</span></p>
              <div id="progress2"></div>
              <p className="progress-p">CSS <span>90%</span></p>
              <div id="progress3"></div>
              <p className="progress-p">Bootstrap <span>90%</span></p>
              <div id="progress4"></div>
              <p className="progress-p">JavaScript <span>70%</span></p>
              <div id="progress5"></div>
              <p className="progress-p">React.JS <span>70%</span></p>
              <div id="progress6"></div>
            </div>
          </div>
          <div className="col-div-6 dots">
            <img src="images/user.jpg" className="user-img" />
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
}

export default Services;
