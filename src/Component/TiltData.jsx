import React from "react";
import Tilt from "react-parallax-tilt";
import bg from "../Assets/weather.jpg"

const TiltData = ({ data }) => {
    return (
        <Tilt>
            <div
                style={{
                    height: "200px",
                    borderRadius: "5px",
                    border: "",
                    backgroundImage: `url(${bg})`,
                    color: "white",
                    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)"
                }}

            >
                <h1> {data}</h1>
            </div>
        </Tilt>
    );
};

export default TiltData;
