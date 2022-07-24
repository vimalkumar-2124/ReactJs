import React, {useContext} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'
import { StudentContext } from './../App'

export default function AllStudent() {
let navigate = useNavigate()
let context = useContext(StudentContext)
let handleDelete = (i) =>{
    let data = [...context.studentName]
    data.splice(i,1)
    context.setStudentName(data)
}
  return <>
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
                context.studentName.map((e,i)=>{
                    return <tr className='home' key={i}>
                        <td>{i+1}</td>
                        <td >{e.name}</td>
                        <td>
                            <Button variant='primary' onClick={()=>navigate(`/edit-student/${i}`)}> <EditIcon/></Button>
                            &nbsp;
                            &nbsp;
                            <Button variant='danger' onClick={()=>handleDelete(i)}><DeleteForeverIcon/></Button>
                        </td>
                    </tr>
                })
            }
      </tbody>
    </Table>
  </>
}
