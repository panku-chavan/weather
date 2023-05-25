import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Weather = ({ city }) => {
    const key = '9c9f6c8a1735159813e9ff8bb9618099';
    const [data, setData] = useState(null)

    const getData = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
            if (response?.data) {
                console.log(response.data)
                setData(response.data)
            }


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [city])
    return (
        <div>{data?.name}</div>
    )
}

export default Weather