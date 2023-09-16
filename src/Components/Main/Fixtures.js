import React from 'react';

const Fixtures = () => {
    return (
        <div className="Fixtures">
            <ul>
                <li>
            <h3>Fixtures</h3>
            </li>
            <li>
            <table>
                <tr>
                    <th>Team vs. Team</th>
                    <th>Start Time</th>
                    <th>Location</th>
                    <th>Weather Forecast</th>
                    <th>Play as per Normal?</th>
                </tr>
                <tr>
                    <td>Team 1 vs. Team 2</td>
                    <td>8:30am</td>
                    <td>Location 1</td>
                    <td>Sunny</td>
                    <td>No change</td>
                </tr>
                <tr>
                    <td>Team 3 vs. Team 4</td>
                    <td>8:30am</td>
                    <td>Location 2</td>
                    <td>High Speed Winds</td>
                    <td>Postponed</td>
                </tr>
                <tr>
                    <td>Team 5 vs. Team 6</td>
                    <td>8:30am</td>
                    <td>Location 3</td>
                    <td>Rain, Thunderstorm expected</td>
                    <td>Postponed</td>
                </tr>
                <tr>
                    <td>Team 7 vs. Team 8</td>
                    <td>8:30am</td>
                    <td>Location 4</td>
                    <td>Overcast</td>
                    <td>No change</td>
                </tr>
            </table>
            </li>
            </ul>
        </div>
    );
};

export default Fixtures;