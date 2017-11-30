import React from "react"

class Lbanner extends React.Component{
	render() {
		return (
			<div class="featured container">
				<div class="row">
					<div class="col-sm-8">
						<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
							<ol class="carousel-indicators">
								<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
								<li data-target="#carousel-example-generic" data-slide-to="1"></li>
								<li data-target="#carousel-example-generic" data-slide-to="2"></li>
							</ol>
							<div class="carousel-inner">
								<div class="item active">
									<img src="images/1.jpg" alt="First slide" />
									<div class="header-text hidden-xs">
										<div class="col-md-12 text-center">
											<h2>Aenean feugiat in ante et </h2>
											<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
										</div>
									</div>
								</div>
								<div class="item">
									<img src="images/2.jpg" alt="Second slide" />
									<div class="header-text hidden-xs">
										<div class="col-md-12 text-center">
											<h2>Aenean feugiat in ante et blandit. Vestibulum</h2>
											<br />
											<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
											<br />
										</div>
									</div>
								</div>
								<div class="item">
									<img src="images/3.jpg" alt="Third slide" />
									<div class="header-text hidden-xs">
										<div class="col-md-12 text-center">
											<h2>Curabitur tincidunt porta lorem vitae</h2>
											<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
										</div>
									</div>
								</div>
							</div>
							<a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
								<span class="glyphicon glyphicon-chevron-left"></span>
							</a>
							<a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
								<span class="glyphicon glyphicon-chevron-right"></span>
							</a>
						</div>
					</div>
					<div class="col-sm-4" >
						<div id="owl-demo-1" class="owl-carousel">
							<div class="right-slide-list">
								<img src="images/slide-2.jpg" />
							</div>
						</div>
						<img src="images/banner.jpg" />
					</div>
				</div>
			</div>
		)
	}
}

export default Lbanner