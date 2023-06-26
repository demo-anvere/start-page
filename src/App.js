import React, { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import {
	IconLogo,
	IconLogoFacebook,
	IconLogoInstagram,
	IconLogoReddit,
	IconLogoTwitter,
	IconLogoYoutube,
} from "./constants/icon"
import Home from "./pages/home/index"
import PrivacyPolicy from "./pages/privacyPolicy/index"
import NotFound from "./pages/notFound/index"
import "./assets/scss/styles.scss"

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="wrapper">
				<header className="header">
					<div className="container">
						<IconLogo />
					</div>
				</header>
				<main>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route
							exact
							path="/privacy-policy"
							element={<PrivacyPolicy />}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<footer className="footer">
					<div className="footer__left">
						<img
							src="https://add.startpage.com/datoCmsDownload/4799/1617225790-privacy-please-badge-en.svg"
							alt="privacy-please-badge"
						/>
					</div>
					<div className="footer__center">
						<IconLogo />
						<ul className="footer__nav">
							<li>
								<Link to="/privacy-policy">Privacy policy</Link>
							</li>
							<li>
								<Link to="/about-us">About us</Link>
							</li>
						</ul>
					</div>
					<div className="footer__right">
						<ul className="footer__social">
							<li>
								<a>
									<IconLogoTwitter />
								</a>
							</li>
							<li>
								<a>
									<IconLogoReddit />
								</a>
							</li>
							<li>
								<a>
									<IconLogoInstagram />
								</a>
							</li>
							<li>
								<a>
									<IconLogoFacebook />
								</a>
							</li>
							<li>
								<a>
									<IconLogoYoutube />
								</a>
							</li>
						</ul>
					</div>
				</footer>
			</div>
		</Suspense>
	)
}

export default App
