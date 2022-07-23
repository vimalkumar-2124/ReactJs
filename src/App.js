import "./App.css";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import Profile from "./components/Profile";
import Account from "./components/Account";
import React from 'react';
import HooksDemo from "./components/HooksDemo";
// import axios from 'axios'; // to fetch datas, it will automatically converts data to JSON


// http://student-mentor-mgmt-sys-fe.herokuapp.com/home
// export const UserContext = React.createContext()
export const url = 'https://62dc2a5e57ac3c3f3c573ebb.mockapi.io/students'
function App() {
  
  let data = {
    monthly: 40000,
    yearly: 480000,
    task: 20,
    pending: 10,
  };
  // let [user,setUser] = useState([])
  

  //useEffect will be synchoronous, we can't use async to fetch datas
  // useEffect(() => {


  // })
  //it will trigger each and every time state change/re-render

  // useEffect(()=>{
  //   getData()
  // }, [])//it will trigger only one time when we select component
  // const getData = async () => {
  //   let res = await axios.get(url)
  //   setUser(res.data)
  // }
  // useEffect(()=>{

  // },[anyvalues])

  return (
    <>
      <div id="wrapper">
        <BrowserRouter>
        {/* <UserContext.Provider value={{user, setUser}}> */}

          <SideBar />
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              <Routes>
                <Route path="/dashboard" element={<Dashboard data={{data}}/>}>
                  <Route path="profile" element={<Profile/>}/>
                  <Route path="account" element={<Account/>}/>
                </Route>
                <Route path="/add-user" element={<CreateUser/>}/>
                <Route path="/edit-user/:id" element={<EditUser />}/>
                <Route path="/hooks-demo" element={<HooksDemo/>}/>
                <Route path="*" element={<Navigate to="/dashboard"/>}/>
              </Routes>
              
            </div>

            {/* <!-- Footer -->/ */}
            <Footer />
            {/* <!-- End of Footer --> */}
          </div>
        {/* </UserContext.Provider> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
