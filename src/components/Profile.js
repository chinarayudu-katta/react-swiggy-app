import React, { useEffect, useState } from 'react'

const Profile = ({props}) => {
    const [count, setCount] = useState(0);
    useEffect(()=> {

    }, [count, ]);
    // async function getUserInfo(){
      
    // }
  return (
    <div className="user-card">
        <h1>Profile Component</h1>
        <h2>Name: {props.name}</h2>
        <h3>Count: {count}</h3>
        <button onClick={()=> setCount(count +1)}>Increase</button>
    </div>
  )
}

export default Profile