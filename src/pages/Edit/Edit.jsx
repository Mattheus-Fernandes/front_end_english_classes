import {Form, Button, Modal} from 'react-bootstrap';
import { useState } from 'react';
import { motion } from "framer-motion"
import { IoCloseSharp } from "react-icons/io5";
import "./Edit.module.scss"



const url = "http://localhost:8080/class"

const Edit = ({id, student, language, unit, date, hour, closeComponent}) => {

  const [studentEdit, setStudentEdit] = useState()
  const [languageEdit, setLanguageEdit] = useState()
  const [unitEdit, setUnitEdit] = useState()
  const [dateEdit, setDateEdit] = useState()
  const [hourEdit, setHourEdit] = useState()



   const handleSubmit = async (e) => {
    e.preventDefault()
    
    
    const editClass = {
      student: studentEdit, language: languageEdit, unit: unitEdit, date: dateEdit, hour: hourEdit
    }

    const request = {
      method: "PUT",
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify(editClass)
    }

    
   await fetch(`${url}/${id}`, request)
    

   window.location.href = "/"
  }

  return (
    <motion.form
      
      initial={{y:-0}}
      animate={{ y: 80}}
      transition={{ type: "spring", stiffness: 25 }}
      className='bg-dark text-white p-2 rounded'
      onSubmit={handleSubmit}>
      
      
      <IoCloseSharp onClick={closeComponent} style={{width:"50px", height: "50px", cursor: "pointer"}} />
      <Modal.Dialog className="w-50 ">
        <Modal.Header className='bg-white text-body mb-4 p-2 rounded-bottom'>
          <h1 className="fs-3">Edit class</h1>
        </Modal.Header>
        <span className="text-center fs-6 text-secondary">Edit the class in your schedule</span>
        <Modal.Body>
          <Form.Group className='mb-2'>
            <Form.Label className="fs-6">Student</Form.Label>
            <Form.Control required type='text' name="student" placeholder='Student name' defaultValue={student} onChange={(e) => setStudentEdit(e.target.value)}/>
          </Form.Group>

          <Form.Group className='mb-2'>
            <Form.Label className="fs-6">Language</Form.Label>
            <Form.Select required name="language" defaultValue={language} onChange={(e) => setLanguageEdit(e.target.value)}>
              <option>--Select the language--</option>
              <option value="English">English</option>
              <option value="German">German</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-2'>
            <Form.Label className="fs-6">Unit</Form.Label>
            <Form.Control required type='text' name="unit" placeholder='Which is the unit?' defaultValue={unit} onChange={(e) => setUnitEdit(e.target.value)}/>
          </Form.Group>

          <Form.Group className='mb-2'>
            <Form.Label className="fs-6">Data</Form.Label>
            <Form.Control required type='date' name="date" defaultValue={date} onChange={(e) => setDateEdit(e.target.value)}/>
          </Form.Group>

          <Form.Group className='mb-4'>
            <Form.Label className="fs-6" >Hour</Form.Label>
            <Form.Control required type='time' name="hour" defaultValue={hour} onChange={(e) => setHourEdit(e.target.value)}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' variant="light">Edit</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </motion.form>
  )
}

export default Edit