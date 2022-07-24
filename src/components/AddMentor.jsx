import React,{useState, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate} from 'react-router-dom'
import { MentorContext } from '../App';

export default function AddMentor() {
    let [name, setName] = useState([])
    let navigate = useNavigate()
    let context = useContext(MentorContext)
    
let handleSubmit = () => {
    let data = {name}
    let mentor = [...context.mentorName]
    mentor.push(data)
    context.setMentorName(mentor)
    navigate('/all-mentors')
}


  return <>
  <div>
  <Form className='offset-3 col-sm-6 mt-5'>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className='home'>Mentor Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      {name.length > 0 ?
      <Button className='mt-2' variant="primary" type="submit" onClick={() => handleSubmit()}>
        Submit
      </Button>
      :
      <div style={{'color':'red'}}>
        * Required
      
      </div>

      }
    </Form>
    </div>
    
</>
}
