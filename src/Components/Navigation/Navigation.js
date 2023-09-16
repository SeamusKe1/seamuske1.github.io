import React from "react";
import "./NavigationStyle.css";

export default function Navigation() {
    return (
        <ul>
            <li>
                <a href="/Welcome">Welcome</a>
        
                <a href="/Carousel">Photo Gallery</a>
            
                <a href="/WeatherInformation">Weather</a>
            
                <a href="/Fixtures">Fixtures</a>
                <a href="/ContactUs">Contact Us</a>
            </li>
        </ul>
    );
}