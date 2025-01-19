import { useState } from 'react'
import './App.css'
import Icon from './components/Icon'
import Time from './components/Time'
import Folder from './components/Folder'
import NewScreen from './components/NewScreen'
import Project from './components/Project'
import thisMe from './assets/thisMe.jpg'
function App() {
      const [isBoxVisible,setIsBoxVisible] = useState(false);
      function handleClick(){
      setIsBoxVisible(!isBoxVisible);
  }

  return (
    <>

    <div className="gridContainer">
    <Icon alt="Linkedin Icon" title ="LinkedIn" link="https://www.linkedin.com/in/matthew-phang-b4a60a326?originalSubdomain=ca"/>
    <Icon alt="Gihub Icon" title ="GitHub" link ="https://github.com/mattp532"/>
    <Icon alt ="Goodreads Icon" title="GoodReads" link = "https://www.goodreads.com/user/show/183601082-matthew-phang"/>
    <Folder alt ="Folder Icon" title="My Projects"/>
    </div>
    
        <div className ="bottomBar">
          
          <button onClick={handleClick} style={{
            height:"70%",
            marginLeft:"10px",
            paddingLeft:"20px",
            paddingRight:"20px",
            fontSize:"1rem",
            fontFamily: 'Windows95Font',
            cursor:"pointer"
          }}>About me</button>
          <p className='email'
          style={{
            backgroundColor:"#f9f9f9",
            color:"black",
            marginLeft:"12px",
            paddingLeft:"15px",
            paddingRight:"15px",
            height:"64%",
            borderWidth: "2px",
            borderStyle: "outset",
            borderColor: "buttonborder",
            borderImage: "initial",
            fontFamily: 'Windows95Font',
            alignItems:"center",
          }}>
            matthew.phang@torontomu.ca
          </p>
          <Time />
        </div>
        {isBoxVisible &&(
            <NewScreen topBarText="Hi, I'm Matthew"exitClick={handleClick}> 
                    <div
        className="aboutMeScreen" style={{
          overflow: "auto",
          display:"flex",
          position:"absolute",
          height:"80%",
          width:"95%",


        }}>
          <div className="aboutMeScreen" style={{
            display:"flex",
            overflow: "auto"
          }}>
          <div className="description" style={{
            marginLeft:"30px",
            marginRight:"30px",
            height:"auto",
            maxHeight:"100%",

            fontFamily: "Windows95Font",


          }}>
I'm a first year computer science student studying at Toronto Metropolitan University. I am currently focused on learning frontend development and building dynamic, user-friendly web interfaces. As I grow my skills, I am excited to expand my knowledge and start learning backend development soon to become a full-stack developer
          </div>

        <img style={{
          marginTop:"8px",
          marginBottom:"20px",
          height:"25vh",
          width:"25vh",
          borderWidth: "2px",
          borderStyle: "outset",
          borderColor: "buttonborder",
        }}
        src={thisMe} alt="" />
          </div>

        </div>
            </NewScreen>       
        )}

    </>
  )
}

export default App;
