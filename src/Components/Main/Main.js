import React from "react";
import Welcome from "./Welcome";
import Weather from "./WeatherInformation";
import Fixtures from "./Fixtures";
import ContactUs from "./ContactUs";
import './Body.css';

const Main =() => {
    return (
        <div className="MainSection">
            <Welcome />
            <Weather />
            <Fixtures />
            <ContactUs />
        </div>
    );
};

export default Main;