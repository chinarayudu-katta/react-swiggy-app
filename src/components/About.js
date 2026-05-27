import React from 'react'
import ProfileClass from './ProfileClass'

class About extends React.Component {
  constructor(props){
    super(props);
    // console.log("Parent Constructor")
  }
  componentDidMount(){
    // console.log("Parent Component Did Mount")
  }
  render(){
    // console.log("Parent render")
    return (
    <div className="m-4 p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>

        <p className="text-lg mb-3">
          Welcome to Rayudu React Application — a modern food ordering web
          application built using React.js.
        </p>

        <p className="text-lg mb-3">
          This project demonstrates React concepts like Components, Props,
          State, Hooks, Routing, API Integration, Tailwind CSS, and more.
        </p>

        <p className="text-lg mb-6">
          Our goal is to provide users with a smooth and interactive food
          browsing experience similar to popular food delivery platforms.
        </p>

        <div className="border p-4 rounded-lg shadow-md bg-gray-100">
          <h2 className="text-2xl font-semibold mb-2">
            Developer Information
          </h2>

          <ProfileClass
            name={"First"}
            location={"Revuru class"}
          />
        </div>
      </div>
  )
  }
}


export default About