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
    <div>
        <h1>About</h1>
        <h2>This is Rayudu React Application</h2>
        {/* <User name={"Chinna (function)"} /> */}
        <ProfileClass name={"First"} location={"Revuru class"} />
    </div>
  )
  }
}


export default About