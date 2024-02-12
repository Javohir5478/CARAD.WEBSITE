import React from 'react';
import './Home.scss';

const Servise = () => {
  return (
    <div className='service_container'>
        <section id="service" className="service">
			<div className="container">
                <h1>Our services</h1>
				<div className="service-content">
					<div className="row">
						<div className="col-md-4 col-sm-6">
							<div className="single-service-item">
								<div className="single-service-icon">
									<i className="flaticon-car"></i>
								</div>
								<h2><a href="#">largest dealership <span> of</span> car</a></h2>
								<p>
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.  
								</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="single-service-item">
								<div className="single-service-icon">
									<i className="flaticon-car-repair"></i>
								</div>
								<h2><a href="#">unlimited repair warrenty</a></h2>
								<p>
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.  
								</p>
							</div>
						</div>
						<div className="service_items col-md-4 col-sm-6">
							<div className="single-service-item">
								<div className="single-service-icon">
									<i className="flaticon-car-1"></i>
								</div>
								<h2><a href="#">insurence support</a></h2>
								<p>
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. 
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
    </div>
  )
}

export default Servise