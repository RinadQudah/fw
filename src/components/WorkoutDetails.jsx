import React from 'react'
import ftoNow from 'date-fns/formatDistanceToNow'
import axios from 'axios'
function WorkoutDetails({workout,show,setshow}) {
  const handleDelete=async()=>{
    await axios.delete('https://bw-341p.onrender.com/api/workouts/'+workout._id)
    setshow(!show)
  }
  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load(kg):</strong>{workout.load}</p>
        <p><strong>Numper of reps:</strong>{workout.reps}</p>
        <p>{ftoNow(new Date(workout.createdAt),{addSuffix:true})}</p>
        <span className="material-symbols-outlined" onClick={handleDelete}>
            delete
        </span>
        
    </div>

  )
}

export default WorkoutDetails