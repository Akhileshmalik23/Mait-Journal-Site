import React from 'react'
import Sidebar from "./Sidebar"
import SidebarItem from './Sidebar'
const Journal = () => {
  return (
    <div>

      <div style={{
        display: "flex",

      }}>
        <div style={{
          width: "22%",
          marginLeft: "5px",
          height: "100%",
          backgroundColor: "rgba(195, 195, 195, 0.152)",
          backdropFilter: "blur(10px)",
          boxShadow: " 0 0 40px rgba(0, 0, 0, 0.8)",
          marginTop: "5px",

        }}>
          <SidebarItem elevation={8} />

        </div>

        <div style={{
          width: "80%",
          margin: "0px 5px",
          height: "100vh",
          backgroundColor: "yellow",
          marginTop: "5px"

        }}>Main</div>

      </div>






    </div>
  )
}

export default Journal