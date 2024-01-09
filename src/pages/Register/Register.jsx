import {Form, Button, Modal} from 'react-bootstrap';
import { useState, useEffect } from 'react';

const url = "http://localhost:8080/class"

const Register = () => {

  const [student, setStudent] = useState()
  const [language, setLanguage] = useState()
  const [unit, setUnit] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    const classes = {
      student, language, unit, date, hour
    }
    
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(classes)
    })

    setStudent("")
    setLanguage("")
    setUnit("")
    setDate("")
    setHour("")
    
    
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Modal.Dialog className="w-50 ">
        <Modal.Header className='bg-dark text-white mb-4 p-2 rounded-bottom'>
          <h1 className="fs-3">Register class</h1>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className='mb-4'>
            <Form.Label className="fs-6">Student</Form.Label>
            <Form.Control required type='text' name="student" placeholder='Student name' onChange={(e) => setStudent(e.target.value)}/>
          </Form.Group>

          <Form.Group className='mb-4'>
            <Form.Label className="fs-6">Language</Form.Label>
            <Form.Select required name="language" onChange={(e) => setLanguage(e.target.value)}>
              <option>--Select the language--</option>
              <option value="english">English</option>
              <option value="german">German</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-4'>
            <Form.Label className="fs-6">Unit</Form.Label>
            <Form.Control required type='text' name="unit" placeholder='Which is the unit?' onChange={(e) => setUnit(e.target.value)}/>
          </Form.Group>

          <Form.Group className='mb-4'>
            <Form.Label className="fs-6">Data</Form.Label>
            <Form.Control required type='date' name="date"  onChange={(e) => setDate(e.target.value)}/>
          </Form.Group>

          <Form.Group className='mb-4'>
            <Form.Label className="fs-6">Hour</Form.Label>
            <Form.Control required type='time' name="hour"  onChange={(e) => setHour(e.target.value)}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' variant="dark">Save</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Form>
  )
}

export default Register