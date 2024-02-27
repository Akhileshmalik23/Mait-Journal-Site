import React from 'react'
import Sidebar from "./Sidebar"
import SidebarItem from './Sidebar'
import JournalCard from './JournalCard'


const Journal = () => {
  return (
    <div>

      <div style={{
        display: "flex",

      }}>
        <div style={{
          width: "30%",
          height: "100vh",
          backgroundColor: "rgba(195, 195, 195, 0.152)",
          backdropFilter: "blur(10px)",
          boxShadow: " 0 0 10px rgba(0, 0, 0, 0.2)",
          marginTop: "5px",

        }}>
          <Sidebar elevation={8} />

        </div>

        <div style={{
          width: "80%",
          margin: "0px 5px",
          height: "100vh",
          marginTop: "5px"

        }}>
        
      
        <JournalCard/>
        
        </div>

      </div>

    </div>
  )
}

export default Journal