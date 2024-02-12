import { Link } from "react-router-dom";
import "./Home.scss";


const HomePage = () => {

     const styled = {
    width: "1200px",
    height: "700px",
    backgroundImage: "url(/public/car.jpg)",
  };
  return (
    <div className="home_container" >

     <div className="home_header" style={styled}>
        <div className="home_h">
            <h4>Posted on startup</h4>
          <h1>Step-by-step guide to choosing great your elegant cars </h1>
          <h5>By James West  |  May 23, 2022 </h5>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
         <Link to="about"> <button className="home_btn">Read More</button></Link>
          </div>
          </div>
		  <div className="home_body">

<section id="new-cars" className="new-cars">
			<div className="container">
				<div className="section-header">
					<p>checkout <span>the</span> latest cars</p>
					<h1>Newest cars</h1>
				</div>
				<div className="new-cars-content">
					<div className="owl-carousel owl-theme" id="new-cars-carousel">
						<div className="new-cars-item">
							<div className="single-new-cars-item">
								<div className="row">
									<div className="col-md-7 col-sm-12">
										<div className="new-cars-img">
											<img src="./ncm1.png" alt="img"/>
										</div> 
										{/* <!--/.new-cars-img--> */}
									</div>
									<div class="col-md-5 col-sm-12">
										<div className="new-cars-txt">
											<h2><a href="#">chevrolet camaro <span> za100</span></a></h2>
											<p>
												Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
											</p>
											<p className="new-cars-para2">
												Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. 
											</p>
											<button className="welcome-btn new-cars-btn" onclick="window.location.href='#'">
												view details
											</button>
										</div>
										{/* <!--/.new-cars-txt-->	 */}
									</div>
									{/* <!--/.col--> */}
								</div>
								{/* <!--/.row--> */}
							</div>
							{/* <!--/.single-new-cars-item--> */}
						</div>
						{/* <!--/.new-cars-item--> */}
						<div className="new-cars-item">
							<div className="single-new-cars-item">
								<div className="row">
									<div className="col-md-7 col-sm-12">
										<div className="new-cars-img">
											<img src="./ncm2.png" alt="img"/>
										</div>
										{/* <!--/.new-cars-img--> */}
									</div>
									<div className="col-md-5 col-sm-12">
										<div className="new-cars-txt">
											<h2><a href="#">BMW series-3 wagon</a></h2>
											<p>
												Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
											</p>
											<p className="new-cars-para2">
												Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. 
											</p>
											<button className="welcome-btn new-cars-btn" onclick="window.location.href='#'">
												view details
											</button>
										</div>
										{/* <!--/.new-cars-txt-->	 */}
									</div>
									{/* <!--/.col--> */}
								</div>
								{/* <!--/.row-->	 */}
							</div>
							{/* <!--/.single-new-cars-item--> */}
						</div>
						{/* <!--/.new-cars-item--> */}
						<div className="new-cars-item">
							<div className="single-new-cars-item">
								<div className="row">
									<div className="col-md-7 col-sm-12">
										<div className="new-cars-img">
											<img src="./ncm3.png" alt="img"/>
										</div>
										{/* <!--/.new-cars-img--> */}
									</div>
									<div className="col-md-5 col-sm-12">
										<div className="new-cars-txt">
											<h2><a href="#">ferrari 488 superfast</a></h2>
											<p>
												Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
											</p>
											<p className="new-cars-para2">
												Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. 
											</p>
											<button className="welcome-btn new-cars-btn" onclick="window.location.href='#'">
												view details
											</button>
										</div>
										{/* <!--/.new-cars-txt-->	 */}
									</div>
									{/* <!--/.col--> */}
								</div>
								{/* <!--/.row--> */}
							</div>
							{/* <!--/.single-new-cars-item--> */}
						</div>
						{/* <!--/.new-cars-item--> */}
					</div>
					{/* <!--/#new-cars-carousel--> */}
				</div>
				{/* <!--/.new-cars-content--> */}
			</div>
			{/* <!--/.container--> */}

		</section>
		{/* <!--/.new-cars--> */}






		          <section id="clients-say"  className="clients-say">
			<div className="container_clients">
				<div className="section-header">
					<h1>what our clients say</h1>
				</div>
				{/* <!--/.section-header--> */}
				<div className="row">
					<div className=" clients-body display-flex owl-carousel testimonial-carousel">
						<div className="col-sm-3 col-xs-12">
							<div className="single-testimonial-box">
								<div className="testimonial-description">
									<div className="testimonial-info">
										<div className="testimonial-img">
											<img src="/c1.png" alt="image of clients person" />
										</div>
										{/* <!--/.testimonial-img--> */}
									</div>
									{/* <!--/.testimonial-info--> */}
									<div className="testimonial-comment">
										<p>
											Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. 
										</p>
									</div>
									{/* <!--/.testimonial-comment--> */}
									<div className="testimonial-person">
										<h2><a href="#">tomas lili</a></h2>
										<h4>new york</h4>
									</div>
									{/* <!--/.testimonial-person--> */}
								</div>
								{/* <!--/.testimonial-description--> */}
							</div>
							{/* <!--/.single-testimonial-box--> */}
						</div>
						{/* <!--/.col--> */}
						<div className="col-sm-3 col-xs-12">
							<div className="single-testimonial-box">
								<div className="testimonial-description">
									<div className="testimonial-info">
										<div className="testimonial-img">
											<img src="/c2.png" alt="image of clients person" />
										</div>
										{/* <!--/.testimonial-img--> */}
									</div>
									{/* <!--/.testimonial-info--> */}
									<div className="testimonial-comment">
										<p>
											Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. 
										</p>
									</div>
									{/* <!--/.testimonial-comment--> */}
									<div className="testimonial-person">
										<h2><a href="#">romi rain</a></h2>
										<h4>london</h4>
									</div>
									{/* <!--/.testimonial-person--> */}
								</div>
								{/* <!--/.testimonial-description--> */}
							</div>
							{/* <!--/.single-testimonial-box--> */}
						</div>
						{/* <!--/.col--> */}
						<div className="col-sm-3 col-xs-12">
							<div className="single-testimonial-box">
								<div className="testimonial-description">
									<div className="testimonial-info">
										<div className="testimonial-img">
											<img src="/c3.png" alt="image of clients person" />
										</div>
										{/* <!--/.testimonial-img--> */}
									</div>
									{/* <!--/.testimonial-info--> */}
									<div className="testimonial-comment">
										<p>
											Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. 
										</p>
									</div>
									{/* <!--/.testimonial-comment--> */}
									<div className="testimonial-person">
										<h2><a href="#">john doe</a></h2>
										<h4>washington</h4>
									</div>
									{/* <!--/.testimonial-person--> */}
								</div>
								{/* <!--/.testimonial-description--> */}
							</div>
							{/* <!--/.single-testimonial-box--> */}
						</div>
						{/* <!--/.col--> */}
					</div>
					{/* <!--/.testimonial-carousel--> */}
				</div>
				{/* <!--/.row--> */}
			</div>
			{/* <!--/.container--> */}

		</section>
		{/* <!--/.clients-say-->	 */}


		  </div>


         </div>
  )
}

export default HomePage;