import React from 'react';

const WeatherInformation = () => {
    return (
        <div className="WeatherInformation">
            <ul>
           <li><h3>Weather Information</h3></li>
           <li>
            <iframe title='Weather Information'
                    width="400"
                    height="300"
                    src="https://embed.windy.com/embed2.html?lat=-18.288&lon=146.158&detailLat=-27.468&detailLon=153.033&width=650&height=450&zoom=5&level=surface&overlay=clouds&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
                    frameborder="1"
                    cite="https://embed.windy.com/embed2.html?lat=-18.288&lon=146.158&detailLat=-27.468&detailLon=153.033&width=650&height=450&zoom=5&level=surface&overlay=clouds&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1">
            </iframe>
            </li>
            </ul>
        </div>
    );
};

export default WeatherInformation;