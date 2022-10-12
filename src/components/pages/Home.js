import { useEffect, useState } from 'react'

import CarouselFade from "../partials/CarouselFade"


export default function Home(){
    // goal from the backend

    const [errorMessage, setErrorMessage] = useState('')

    console.log('server url', process.env.REACT_APP_SERVER_URL)
    useEffect(() => {
        const getGoals = async () => {
            try{
                // const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/goal`)
                // console.log(response.data)
                // setGoal(response.data)
            } catch(err) {
                console.warn(err)
                if(err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getGoals()
    }, [])

    return(
    <div>
        <h1>Welcome to your bucket list</h1>
        <h2>Most recent goals</h2>
        <p>{errorMessage}</p>
        <CarouselFade />
    </div>
    
    )
}