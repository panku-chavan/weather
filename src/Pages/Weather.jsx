import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TiltData from '../Component/TiltData';
import temp from "../Assets/temp.png";

const Weather = ({ city }) => {
    const key = '9c9f6c8a1735159813e9ff8bb9618099';
    const [data, setData] = useState(null)
    const [show, setShow] = useState(false);

    const getData = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
            if (response?.data) {
                console.log(response.data)
                setData(response.data)
                setShow(true)
            }


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [city])
    return (
        <>
            {
                show ? (

                    <div className='row mt-4 '>
                        <div className="col-md-3 mb-4">
                            <TiltData data={data?.name} />

                        </div>
                        <div className="col-md-4 mb-4">
                            <TiltData data={data?.main?.temp} img={temp} />
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default Weather