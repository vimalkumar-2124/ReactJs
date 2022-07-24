import React, {useContext} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'
import { MentorContext } from '../App';
export default function AllMentor(props) {
    let navigate = useNavigate()
    let context = useContext(MentorContext)
    let handleDelete = (i) =>{
        let data = [...context.mentorName]
        data.splice(i,1)
        context.setMentorName(data)
    }
  return <div>
    <Table  bordered>
      <thead>
        <tr className='home'>
          <th>#</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
            {
                context.mentorName.map((e,i)=>{
                    return <tr className='home' key={i}>
                        <td>{i+1}</td>
                        <td >{e.name}</td>
                        <td>
                            <Button variant='primary' onClick={()=>navigate(`/edit-mentor/${i}`)}> <EditIcon/></Button>
                            &nbsp;
                            &nbsp;
                            <Button variant='danger' onClick={()=>handleDelete(i)}><DeleteForeverIcon/></Button>
                        </td>
                    </tr>
                })
            }
      </tbody>
    </Table>
  </div>
}
