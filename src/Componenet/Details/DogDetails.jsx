import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DogDetails() {
  const [dogDetails, setdogDetails] = useState(null)
 async function getDetails() {
    let {data}= await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
  setdogDetails(data);
  }
  useEffect(()=>{
    getDetails();
  },[])
   const {name} =useParams()
   console.log(name);
   console.log(dogDetails);
  return (
   <>
   
   {dogDetails?<div className="container">
    <div className="row mt-5 p-5">
    {dogDetails.map((dog)=><>
      <div className="col-md-6">
        <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt="img" className='w-100 rounded' />
      </div>
      <div className="col-md-6">
       <div className="detail p-2">
       <h1>{dog.name}</h1>
       <p className='p-1'><span className='fw-bold  '>Bred for: </span>{dog.bred_for}</p>
       <p className='p-1'><span className='fw-bold  '>Height: </span>{`${dog.height.metric} cm`}</p>
        <p className='p-1'><span className='fw-bold'>Weight: </span>{`${dog.weight.metric} kg`}</p>
        <p className='p-1'><span className='fw-bold'>Bread group: </span>{`${dog.breed_group}`}</p>
        <p className='p-1'><span className='fw-bold'>Life span: </span>{dog.life_span}</p>
        <p className='p-1'><span className='fw-bold'>Temperament : </span>{dog.temperament}</p>
       </div>
       <Link to='/'><button className='btn btn-outline-info'> Back <i className="fa-solid fa-right-long"></i></button></Link>
      </div>
    </>)}
     
    </div>
   </div>:<div className=' d-flex justify-content-center align-items-center vh-100'>
   <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
   </div>}
   </>
  )
}
