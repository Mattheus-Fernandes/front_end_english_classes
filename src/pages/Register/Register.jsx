import {Form, Button, Modal} from 'react-bootstrap';
import { useState } from 'react';
import { motion } from "framer-motion"
import { IoCloseSharp } from "react-icons/io5";
import "./Register.module.scss"


const url = "http://localhost:8080/class"

const Register = ({closeComponent}) => {

  const [student, setStudent] = useState()
  const [language, setLanguage] = useState()
  const [unit, setUnit] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()

  const request = async (url, method, data) => {

    await fetch(url, {
      method,
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify(data)
    })


  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    
  
    const classes = {
      student, language, unit, date, hour
    }

    request(url, "POST", classes)

    setStudent("")
    setLanguage("")
    setUnit("")
    setDate("")
    setHour("") 

    window.location.reload()
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
          <h1 className="fs-3">Register class</h1>
        </Modal.Header>
        <span className="text-center fs-6 text-secondary">Register the classes in your schedule</span>
        <Modal.Body>
          <Form.Group className='mb-2'>
            <Form.Label className="fs-6">Student</Form.Label>
            <Form.Control required type='text' name="student" placeholder='Student name'value={student} onChange={(e) => setStudent(e.target.value)}/>
          </Form.Group>

          <Form.Group className='mb-2'>
            <Form.Label className="fs-6">Language</Form.Label>
            <Form.Select required name="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option>--Select the language--</option>
              <option value="English">English</option>
              <option value="German">German</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-2'>
            <Form.Label className="fs-6">Unit</Form.Label>
            <Form.Control required type='text' name="unit" placeholder='Which is the unit?' value={unit} onChange={(e) => setUnit(e.target.value)}/>
          </Form.Group>

          <Form.Group className='mb-2'>
            <Form.Label className="fs-6">Data</Form.Label>
            <Form.Control required type='date' name="date" value={date}  onChange={(e) => setDate(e.target.value)}/>
          </Form.Group>

          <Form.Group className='mb-4'>
            <Form.Label className="fs-6">Hour</Form.Label>
            <Form.Control required type='time' name="hour" value={hour} onChange={(e) => setHour(e.target.value)}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' variant="light">Save</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </motion.form>
  )
}

export default Register