import axios from 'axios'
import React, { useState } from 'react'

function WorkoutForm({show,setshow}) {
  const [title,settitle]=useState('')
  const [load,setload]=useState('')
  const [reps,setreps]=useState('')
  const [error,setError]=useState('')

  const handleSubmite=async(e)=>{
    e.preventDefault()
    setError('')
    try {
      await axios.post('https://bw-341p.onrender.com/api/workouts/',{title,load,reps})
      setshow(!show)
      settitle('')
      setload('')
      setreps('')
    } catch (error) {
      setError('please fill out all fields')
    }
  }
  return (
    <form className='creat' onSubmit={handleSubmite}>
      <h3>Add a new workout</h3>
      <label>Excersize title:</label>
      <input type="text" onChange={(e)=>settitle(e.target.value)} value={title}/>
      <label>Load (in kg):</label>
      <input type="number" onChange={(e)=>setload(e.target.value)} value={load}/>
      <label>Reps</label>
      <input type="number" onChange={(e)=>setreps(e.target.value)} value={reps}/>
      <button>Add workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm