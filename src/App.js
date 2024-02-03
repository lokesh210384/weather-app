
import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div classNameName="container">
        <CurrentLocation />
      </div>
      {/* <div classNameName="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.gauravghai.dev/">
          Gaurav Ghai
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          HTML HINTS
        </a>
      </div> */}
      {/* <div className="swiper mySwiper weather-forecasts">
		<h3>5 Days Weather Forecast (Slide)</h3>
		<ul className="swiper-wrapper weather-ul align">
			<li className="swiper-slide weather-data">
				<span>-- -- --</span>
				
				<small>--°</small>
			</li>
			<li className="swiper-slide weather-data">
				<span>-- -- --</span>
				
				<small>--°</small>
			</li>
			<li className="swiper-slide weather-data">
				<span>-- -- --</span>
				
				<small>--°</small>
			</li>
			<li className="swiper-slide weather-data">
				<span>-- -- --</span>
				
				<small>--°</small>
			</li>
			<li className="swiper-slide weather-data">
				<span>-- -- --</span>
				
				<small>--°</small>
			</li>
		</ul>
	</div> */}
    </React.Fragment>
  );
}

export default App;