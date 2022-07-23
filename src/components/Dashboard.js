import React, {useEffect, useState} from 'react'
import { Link, Outlet, useNavigate} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { url } from './../App'
import axios from 'axios'
// import {UserContext} from './../App'
function Dashboard(props) {
    let navigate = useNavigate()
    // let context = useContext(UserContext)
    let [user,setUser] = useState([])
  
    useEffect(()=>{
        getData()
    }, [])//it will trigger only one time when we select component
    const getData = async () => {
        let res = await axios.get(url)
        setUser(res.data)
    }
    let handleDelete = async(i) => {
        // let data = [...context.user]
        // data.splice(i,1)
        // context.setUser(data)
        let res = await axios.delete(`${url}/${i}`)
        if(res.status === 200)
            getData()
    }
  return <>
    <div className="container-fluid">

{/* <!-- Page Heading --> */}
<div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
    <a href="#!" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
</div>

{/* <!-- Content Row --> */}
<div className="row">

    {/* <!-- Earnings (Monthly) Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Earnings (Monthly)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">${props.data.data.monthly}</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Earnings (Monthly) Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Earnings (Annual)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">${props.data.data.yearly}</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Earnings (Monthly) Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                        </div>
                        <div className="row no-gutters align-items-center">
                            <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{props.data.data.task}%</div>
                            </div>
                            <div className="col">
                                <div className="progress progress-sm mr-2">
                                    <div className="progress-bar bg-info" role="progressbar"
                                        style={{"width": `${props.data.data.task}%`}} aria-valuenow={props.data.data.task} aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Pending Requests Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Pending Requests</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.data.pending}</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<h3>List of Users</h3>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>DOB</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
            {
                user.map((e,id)=>{
                    return <tr key={id}>
                        <td>{id+1}</td>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.email}</td>
                        <td>{e.mobile}</td>
                        <td>{e.dob}</td>
                        <td>{e.location}</td>
                        <td>
                            <Button variant='primary' onClick={()=>navigate(`/edit-user/${e.id}`)}> <EditIcon/> Edit</Button>
                            &nbsp;
                            &nbsp;
                            <Button variant='danger' onClick={()=>handleDelete(e.id)}><DeleteForeverIcon/> Delete</Button>
                        </td>
                    </tr>
                })
            }
      </tbody>
    </Table>
{/* <!-- Content Row --> */}
<div>
    Sub main pages
    <nav className='text-white'>
        <button className='btn btn-dark '>
            <Link to="profile">Profile</Link>
        </button>
        &nbsp;
        <button className='btn btn-dark '>
            <Link to="account">Account</Link>
        </button>
    </nav>
    <Outlet/>
</div>
</div>
  </>
}

export default Dashboard