import React,{useState, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate} from 'react-router-dom'
import { StudentContext } from './../App'

export default function AddStudent() {
    let [name, setName] = useState([])
    let navigate = useNavigate()
    let context = useContext(StudentContext)
    
let handleSubmit = () => {
    let data = {name}
    let student = [...context.studentName]
    student.push(data)
    context.setStudentName(student)
    navigate('/all-students')
}


  return <>
  <div>
  <Form className='offset-3 col-sm-6 mt-5'>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className='home'>Student Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      {name.length === 0 ?
      <div style={{'color':'red'}}>
        * Required
      
      </div>
      :
      <Button className='mt-2' variant="primary" type="submit" onClick={() => handleSubmit()}>
        Submit
      </Button>

      }
    </Form>
    </div>
    
</>
}
