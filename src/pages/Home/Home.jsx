import styles from "./Home.module.scss"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import { useState, useEffect } from "react"

const url = "http://localhost:8080/class"

const Home = () => {


  const [infoClasses, setInfoClasses] = useState([])

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

  return (
    <div className={styles.home}>
      <h1>Scheduled classes</h1>
      <FullCalendar 
      
        plugins={[ dayGridPlugin,  ]}
        initialView="dayGridMonth"
        events={
          showClasses
        }
        height={"550px"}
        
        eventClick={function(e){
          
          window.location.href = `http://localhost:3000/search/class/${e.event.title}`
          
        }}
        
      />
    </div>
  )
}

export default Home