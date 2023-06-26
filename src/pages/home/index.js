import React from "react"
import {
	IconCheckGreen,
	IconQuote,
	ImageSection1,
	ImageSection2,
	ImageSection3,
	ImageSection5,
} from "../../constants/icon"
import logoChrome from "../../assets/images/logoChrome.png"
import starRating from "../../assets/images/starRating.png"
import Slider from "react-slick"

const HomePage = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			// {
			// 	breakpoint: 1024,
			// 	settings: {
			// 		slidesToShow: 3,
			// 		slidesToScroll: 3,
			// 		infinite: true,
			// 		dots: true
			// 	}
			// },
			// {
			// 	breakpoint: 600,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		slidesToScroll: 2,
			// 		initialSlide: 2
			// 	}
			// },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<>
			{/*---------------------------section1-------------------*/}
			<section className="section1">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-6">
							<h2 className="heading2">
								The world's most private search engine
							</h2>
							<ul className="list">
								<li>
									<IconCheckGreen />
									<span className="list__text">
										No collecting personal data
									</span>
								</li>
								<li>
									<IconCheckGreen />
									<span className="list__text">
										No ad retargeting
									</span>
								</li>
								<li>
									<IconCheckGreen />
									<span className="list__text">
										No saving search history
									</span>
								</li>
							</ul>
							<div className="section1__cont">
								<p className="p1">
									Set Startpage as your default search engine
									to search from your browser.
								</p>
								<div className="chromeBox">
									<a className="btn">
										<span>Add to Chrome</span>
									</a>
									<div className="chromeBox__install">
										<img
											src={logoChrome}
											alt="logo-chrome"
										/>
										<div>
											<p className="p1">210,000+</p>
											<p className="p2">Installs</p>
										</div>
									</div>
									<div className="chromeBox__rating">
										<img
											src={starRating}
											alt="star-rating"
										/>
										<p className="p2">4.1 rating</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-6">
							<ImageSection1 />
						</div>
					</div>
				</div>
			</section>
			{/*---------------------------section2-------------------*/}
			<section className="section2">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-6">
							<ImageSection2 />
						</div>
						<div className="col-12 col-sm-6">
							<h2 className="heading2">
								How your search stays private
							</h2>
							<ul className="list">
								<li>
									<span className="list__numb">1</span>
									<span className="list__text">
										No collecting personal data
									</span>
								</li>
								<li>
									<span className="list__numb">2</span>
									<span className="list__text">
										Startpage removes all identifying
										personal data
									</span>
								</li>
								<li>
									<span className="list__numb">3</span>
									<span className="list__text">
										Private search complete
									</span>
								</li>
							</ul>
							<div className="section2__cont">
								<p className="p1">
									Set Startpage as your default search engine
									to search from your browser.
								</p>
								<a className="btn">Add to Chrome</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*---------------------------section3-------------------*/}
			<section className="section3">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-6">
							<h2 className="heading2">
								Private search engine benefits
							</h2>
							<ul className="list">
								<li>
									<IconCheckGreen />
									<span className="list__text">
										Zero saving, sharing or selling your
										search data
									</span>
								</li>
								<li>
									<IconCheckGreen />
									<span className="list__text">
										Best-in-class Google search results
									</span>
								</li>
								<li>
									<IconCheckGreen />
									<span className="list__text">
										No 3rd party trackers or cookies like
										other search engines
									</span>
								</li>
								<li>
									<IconCheckGreen />
									<span className="list__text">
										Un-profiled search results
									</span>
								</li>
								<li>
									<IconCheckGreen />
									<span className="list__text">
										Browse other sites in complete anonymous
										view
									</span>
								</li>
							</ul>
							<div className="section3__cont">
								<p className="p1">
									Set Startpage as your default search engine
									to search from your browser.
								</p>
								<a className="btn">Add to Chrome</a>
							</div>
						</div>
						<div className="col-12 col-sm-6">
							<ImageSection3 />
						</div>
					</div>
				</div>
			</section>
			{/*---------------------------section4-------------------*/}
			<section className="section4">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12">
							<h2 className="heading2">
								What industry experts are saying
							</h2>
							<div className="section4__slide">
								<Slider {...settings}>
									<div className="section4__slide__col">
										<div className="section4__slide__item">
											<IconQuote />
											<p>
												Startpage is designed to retain
												your privacy. The engine doesn't
												collect data, doesn't keep tabs
												on your movements, and isn't
												owned by a gigantic corporation.
											</p>
											<div className="section4__slide__logo">
												<img
													src="https://add.startpage.com/datoCmsDownload/4799/1610148151-bloomberg-business-logo.svg"
													alt="bloomberg-business-logo"
												/>
											</div>
										</div>
									</div>
									<div className="section4__slide__col">
										<div className="section4__slide__item">
											<IconQuote />
											<p>
												If you’re looking for the
												quality of Google search results
												but still want to protect your
												privacy, check out
												Startpage.com.
											</p>
											<div className="section4__slide__logo fox-news-logo">
												<img
													src="https://add.startpage.com/datoCmsDownload/4799/1610148176-fox-news-logo.svg"
													alt="fox-news-logo"
												/>
											</div>
										</div>
									</div>
									<div className="section4__slide__col">
										<div className="section4__slide__item">
											<IconQuote />
											<p>
												Startpage's 'Anonymous View'
												link ... makes it incredibly
												easy for users to visit websites
												while protecting their privacy.
											</p>
											<div className="section4__slide__logo">
												<img
													src="https://add.startpage.com/datoCmsDownload/4799/1610148211-techradar-logo.svg"
													alt="techradar-logo"
												/>
											</div>
										</div>
									</div>
									<div className="section4__slide__col">
										<div className="section4__slide__item">
											<IconQuote />
											<p>
												This alternative search engine
												is basically Google without the
												privacy headaches.
											</p>
											<div className="section4__slide__logo">
												<img
													src="https://add.startpage.com/datoCmsDownload/4799/1610148232-fast-company-logo.svg"
													alt="fast-company-logo"
												/>
											</div>
										</div>
									</div>
								</Slider>
							</div>
							<div className="section4__cont">
								<p className="p1">
									Set Startpage as your default search engine
									to search from your browser.
								</p>
								<a className="btn">Add to Chrome</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*---------------------------section5-------------------*/}
			<section className="section5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-6">
							<ImageSection5 />
						</div>
						<div className="col-12 col-sm-6">
							<h2 className="heading2">Our mission</h2>
							<div className="section5__cont">
								<p className="p1">
									Startpage's mission is to protect people's
									worldwide right to privacy. Take back
									control of your data rights today!
								</p>
								<div className="chromeBox">
									<a className="btn">
										<span>Add to Chrome</span>
									</a>
									<div className="chromeBox__install">
										<img
											src={logoChrome}
											alt="logo-chrome"
										/>
										<div>
											<p className="p1">210,000+</p>
											<p className="p2">Installs</p>
										</div>
									</div>
									<div className="chromeBox__rating">
										<img
											src={starRating}
											alt="star-rating"
										/>
										<p className="p2">4.1 rating</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default HomePage
