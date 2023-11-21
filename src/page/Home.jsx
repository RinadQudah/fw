import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
const Home =()=>  {
    const [workouts,setworkouts]=useState([])
    const [show,setshow]=useState(false)
    useEffect(()=>{
        const getData=async()=>{
        const res =await axios.get('https://bw-341p.onrender.com/api/workouts')
        console.log(res.data)
        setworkouts(res.data)
    }
    getData()
    },[show])    //كل ما نغير عالقسمه رح يشغل ال get-->
  return (
    <>
    <div className="home">
        <div className="workouts">
            { workouts && workouts.map((work)=>(
                <WorkoutDetails workout={work} show={show} setshow={setshow} key={work._id}/>
            ))}
        </div>
        <WorkoutForm show={show} setshow={setshow}/>
    </div>
    </> 
  )
}

export default Home