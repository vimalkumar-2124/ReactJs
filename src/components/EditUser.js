import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

export default function EditUser() {
  let params=useParams();
  // const [searchParams, setSearchParams] = useSearchParams()
  // console.log(searchParams.get("name"))
  console.log(params)
  return(
    <h1>EditUser</h1>
  )                           
}
