import img1 from'./img/1.jpg'
import img2 from'./img/2.jpg'
import img3 from'./img/3.jpg'
import img4 from'./img/4.jpg'
import img5 from'./img/5.jpg'
import img6 from'./img/6.jpg'
import "./Portfolio in.css";



function Portfolio() {
    return (
      <div className="Portfoliocontainer">
      <div className="main">

       	<div className="section-4">
			<div className="col-div-12">
				<br />
				<div className="p-boxs">
					<img src={img1} alt='image1'/>
				</div>
				<div className="p-boxs">
					<img src={img2}  alt='image2'/>
				</div>
				<div className="p-boxs">
					<img src={img3}  alt='image3'/>
				</div>
				<div className="p-boxs">
					<img src={img4} alt='image4' />
				</div>
				<div className="p-boxs">
					<img src={img5}  alt='image5'/>
				</div>
				<div className="p-boxs">
					<img src={img6}  alt='image6'/>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
      </div>
      </div>

    );
  }
  
  export default Portfolio;
  