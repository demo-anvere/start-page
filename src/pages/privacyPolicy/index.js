import React from "react"
import {
	ImagePrivacyPolicy,
	ImagePrivacyPolicyBottom,
} from "../../constants/icon"

const PrivacyPolicyPage = () => {
	return (
		<section className="privacyPolicy">
			<div className="privacyPolicy__banner">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-6">
							<h2 className="heading2">Our Privacy Policy</h2>
							<p>
								We created Startpage to help you search and
								browse the internet privately. Not because you
								have something to hide, but because you have a
								lot to protect!
							</p>
							<p>
								We blazed the trail in 2006, and protecting your
								privacy is now more important than ever.
							</p>
							<p>
								Protecting your privacy is all about having
								control over your data. At Startpage, we help
								you control and protect what’s yours.
							</p>
							<p>
								When it comes to privacy, it's not just our
								policy. It's our mission!
							</p>
						</div>
						<div className="col-12 col-sm-6">
							<ImagePrivacyPolicy />
						</div>
					</div>
				</div>
			</div>
			<div className="privacyPolicy__cont">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-4">
							<div className="privacyPolicy__question">
								<p className="privacyPolicy__title">Contents</p>
								<ul>
									<li>
										<a href="#section-1">
											We don't collect any "personal data"
										</a>
									</li>
									<li>
										<a href="#section-2">
											How we define "personal data"
										</a>
									</li>
									<li>
										<a href="#section-3">
											We don't record your search queries
										</a>
									</li>
									<li>
										<a href="#section-4">
											How we have implemented truly
											anonymous analytics
										</a>
									</li>
									<li>
										<a href="#section-5">
											How we keep Startpage free without
											using "personal data"
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-12 col-sm-8">
							<div className="privacyPolicy__result">
								<div
									className="privacyPolicy__result__item"
									id="section-1"
								>
									<h3>
										We don't collect any "personal data"
									</h3>
									<p>
										If information isn’t collected, it can’t
										be stolen, demanded, leaked or abused.
										Protecting your personal data is the
										best way to safeguard your online
										privacy.
									</p>
								</div>
								<div
									className="privacyPolicy__result__item"
									id="section-2"
								>
									<h3>How we define "personal data"</h3>
									<p>
										Our definition of personal data is based
										on the privacy laws and regulations of
										the EU, including the General Data
										Protection Regulation (GDPR). These are
										widely regarded as the strongest privacy
										protections in the world. We consider
										any information about you or your
										behavior that can be traced back to you
										as personal data.
									</p>
									<p className="bold">
										Information we don’t collect
									</p>
									<p>So let’s be perfectly clear:</p>
									<ul>
										<li>
											<p className="bold">
												We don’t record your IP address
											</p>
											<p>
												The only exception is for
												automated search requests
												(robots) that rapidly submit
												more queries to our servers than
												any normal human would. When our
												software detects potential
												abuse, we register and block the
												offending IP address in order to
												keep our service safe and free.
											</p>
										</li>
										<li>
											<p className="bold">
												We don’t serve any tracking or
												identifying cookies
											</p>
											<p>
												This is about "good" and "bad"
												cookies. Cookies are small
												pieces of data that are sent to
												your hard drive by websites you
												visit. "Bad" cookies have unique
												elements that can track all
												kinds of personal information.
												We don’t serve any of those.
												Startpage uses just one "good"
												cookie called "preferences" in
												order to remember the search
												preferences you choose. It’s
												completely anonymous and expires
												after not visiting Startpage for
												90 days.
											</p>
										</li>
									</ul>
								</div>
								<div
									className="privacyPolicy__result__item"
									id="section-3"
								>
									<h3>We don't record your search queries</h3>
									<p>
										When you search, your query is
										automatically stripped of unnecessary
										metadata including your IP address and
										other identifying information. We send
										the anonymized search query to Google
										and return the search results to you. We
										don’t log your searches.
									</p>
									<p>
										To prevent abuse such as robotic
										high-volume querying, we anonymously
										determine the frequency of popular
										search keywords as a part of our
										anti-abuse measures, while protecting
										your privacy.
									</p>
								</div>
								<div
									className="privacyPolicy__result__item"
									id="section-4"
								>
									<h3>
										How we have implemented truly anonymous
										analytics
									</h3>
									<p>
										We do measure overall traffic numbers
										and some other – strictly anonymous –
										statistics. These stats may include the
										number of times our service is accessed
										by a certain operating system, a type of
										browser, a language, etc., but we don’t
										know anything about individual users.
									</p>
								</div>
								<div
									className="privacyPolicy__result__item"
									id="section-5"
								>
									<h3>
										How we keep Startpage free without using
										"personal data"
									</h3>
									<p>
										Most online advertising today is
										personalized, meaning that online
										advertising services track what you do
										online and profile you in order to serve
										tailored ads. We don’t do that at
										Startpage. No tracking. No profiling!
									</p>
									<p>
										Our search result pages may include a
										small number of clearly labeled
										"sponsored links," which generate
										revenue and cover our operational costs.
										Those links are retrieved from platforms
										such as Google AdSense. In order to
										enable the prevention of click fraud,
										some non-identifying system information
										is shared, but because we never share
										personal information or information that
										could uniquely identify you, the ads we
										display are not connected to any
										individual user.
									</p>
									<p>
										It’s a myth that search engines need to
										profile you in order to earn decent
										money. Startpage serves strictly
										non-personalized ads. Sure, our ads make
										only a fraction of what other search
										engine ads make, but they pay all our
										bills.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="privacyPolicy__bottom">
				<ImagePrivacyPolicyBottom />
				<p className="bold">
					When it comes to privacy, it's not just our policy. It's our
					mission!
				</p>
			</div>
		</section>
	)
}

export default PrivacyPolicyPage
