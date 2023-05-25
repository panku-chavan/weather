import React, { useState } from "react";
import Layout from "../Component/Layout";
import Weather from "./Weather";

const InputCity = () => {
    const [text, setText] = useState("");
    const [city, setCity] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(text)
        setText('')
    }
    return (
        <Layout>
            <div className="container-sm">
                <form className="" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-11">
                            <input
                                className="form-control transparent-input"
                                type="text"
                                placeholder="Enter City Name"
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                            />
                        </div>
                        <div className="col-md-1">
                            <input type="submit" className="btn btn-primary" value={"Submit"} />

                        </div>
                    </div>
                </form>
                <Weather city={city} />
            </div>
        </Layout>
    );
};

export default InputCity;
