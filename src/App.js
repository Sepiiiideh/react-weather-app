import "./App.css";
import "./bootstrap.min.css";
import Search from "./Search";
import Footer from "./Footer";
import Forecast from "./Forecast";
import WeatherInfo from "./WeatherInfo";
import WeatherDesc from "./WeatherDesc";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weatherApp day ">
            <form id="search-form"></form>
            <Search />
            <div className="row mt-5">
              <WeatherInfo />
              <WeatherDesc />
            </div>
            <Forecast />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
