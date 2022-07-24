import React, {useContext, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { MentorContext } from '../App';

export default function EditMentor() {
    let params = useParams()
    let context = useContext(MentorContext)
    let [name, setName] = useState(context.mentorName[params.id].name)
    let navigate = useNavigate()
    let handleSubmit =() => {
        
        let data = {name}
        let mentor = [...context.mentorName]
        mentor.splice(params.id, 1 , data)
        context.setMentorName(mentor)
        navigate('/all-mentors')
    }
    let handleCancel = () => {
        navigate('/all-mentors')
    }
  return <div className='home'>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Update Student Name</Form.Label>
        <Form.Control type="text" placeholder="Edit Name"  value={name} onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      {name.length === 0 ?
      <div style={{'color':'red'}}>
        * Required
      </div>
      :
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
      }
      {' '}
      <Button variant="primary" onClick={()=>handleCancel()}>
        Cancel
      </Button>
    </Form>
  </div>
}
