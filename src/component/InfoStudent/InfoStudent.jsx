import {Card, Button} from 'react-bootstrap';


const InfoStudent = ({student, language, unit, date, hour, tes}) => {

  return (
    <Card style={{ width: '50rem' }}>
      <h1 className='text-center bg-dark text-white'>Student</h1>
      <Card.Body>
        <Card.Title className='fs-1'>{student}</Card.Title>
        <Card.Subtitle className="fs-4 mb-2 text-muted">
          <span>Language: </span>
          <span>{language}</span>
        </Card.Subtitle>
        <Card.Text className='fs-5 m-0'>
          <span>Unit: </span>
          <span>{unit}</span>
        </Card.Text>
        <Card.Text className='fs-5 m-0'>
          <span>Date: </span>
          <span>{date}</span>
        </Card.Text>
        <Card.Text className='fs-5'>
          <span>Time: </span>
          <span>{hour}</span>
        </Card.Text>
        <Button variant="warning" className='me-2'>Edit</Button>
        <Button variant="danger" onClick={tes}>Delete</Button>
        
      </Card.Body>
    </Card>
  )
}

export default InfoStudent