import styles from "./Home.module.scss"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import { useState, useEffect } from "react"
import Register from "../Register/Register"

const url = "http://localhost:8080/class"

const Home = () => {

  const changeComponent = [
    {id: 1, change: "register"},
    {id:2, change: "edit"}
  ]

  const [infoClasses, setInfoClasses] = useState([])
  const [component, setComponent] = useState("")

   useEffect(() => {

    async function getData(){

      const res = await fetch(url)
      const data = await res.json()

      setInfoClasses(data)
    }

    getData()
   }, []) 

   const showClasses = infoClasses.map((e) => {

    return {
      title: e.student,
      start: e.date,
      id: e.id,
      unit: e.unit
    }

   })

   const showComponentRegister = () => {

    setComponent(changeComponent[0].change)

   }

   const closeComponent = () => {
    setComponent("")
   }

  return (
    <div className={styles.home}>

      <button onClick={showComponentRegister} type="button" className="btn btn-dark">Register</button>

      <h1>Scheduled classes</h1>

      <FullCalendar 
        plugins={[ dayGridPlugin,  ]}
        initialView="dayGridMonth"
        events={
          showClasses
        }
        height={"550px"}
        
        eventClick={function(e){
          
          window.location.href = `http://localhost:3000/search/class/${e.event.id}`
        }}
      />

      {"register" === component && <Register closeComponent={closeComponent} />}
    </div>
  )
}

export default Home