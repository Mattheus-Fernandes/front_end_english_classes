import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

//Component
import InfoStudent from "../../component/InfoStudent/InfoStudent"
import Edit from "../Edit/Edit";

const url = "http://localhost:8080/class"

const Search = () => {

  const changeComponent = [
    {id: 1, change: "register"},
    {id:2, change: "edit"}
  ]
  const [component, setComponent] = useState("")
  const {student} = useParams()
  const [infoStudent, setInfoStudent] = useState([])
  
  

  const navigate = useNavigate()

  useEffect(() => {

    async function teste(){

      const res = await fetch(`${url}/${student}`)
      const data = await res.json()

      setInfoStudent(data)
    }

    teste()
  }, [student])


  const deleteStudent = async () => {
    
    await fetch(`${url}/${infoStudent.id}`, {
      method: "DELETE"
    })

    navigate("/")

  }

  const showComponentEdit = () => {

    setComponent(changeComponent[1].change)

   }

  const closeComponent = () => {
    
    setComponent("")
   }

  return (
    <div className="d-flex justify-content-center">
      <InfoStudent 
      deleteStudent={deleteStudent}
      id={infoStudent.id}
      student={infoStudent.student} 
      language={infoStudent.language}
      unit={infoStudent.unit}
      date={infoStudent.date}
      hour={infoStudent.hour}
      showComponentEdit={showComponentEdit}
    />
    
    {"edit" === component && <Edit  
      id={infoStudent.id}
      student={infoStudent.student} 
      language={infoStudent.language}
      unit={infoStudent.unit}
      date={infoStudent.date}
      hour={infoStudent.hour}
      closeComponent={closeComponent}
    />}

    </div>

  )
}

export default Search