import React from "react";
import Tilt from "react-parallax-tilt";
import bg from "../Assets/weather.jpg"

const TiltData = ({ data, img }) => {
    return (
        <Tilt>
            <div
                style={{
                    height: "",
                    borderRadius: "5px",
                    border: "",
                    backgroundImage: `url(${bg})`,
                    color: "white",
                    boxShadow: "5px 5px 10px black"
                }}

            >
                <div className="tilt">
                    <span className="center glow"> {data}</span>
                    <img height={"80px"} src={img} />
                </div>
            </div>
        </Tilt>
    );
};

export default TiltData;
