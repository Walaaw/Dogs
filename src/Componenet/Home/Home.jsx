import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dog from '../Dog/Dog';

export default function Home() {
    const [allDogs, setallDogs] = useState(null);
    const [slice, setslice] = useState(9);
    const [name, setname] = useState('');
    const [searchlist, setsearchlist] = useState(null)
async function getallDogs(){
    let {data}= await axios.get('https://api.thedogapi.com/v1/breeds');
    setallDogs(data);
 }
useEffect(()=>{
    getallDogs();
},[])
 async function getsearch(e){
  e.preventDefault();
  let {data}= await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
  setsearchlist(data);
}
console.log(searchlist);
  return (
   <>
     <form onSubmit={getsearch} className=' d-flex justify-content-between align-items-center w-50 m-auto'>
        <input type="text" className=' form-control w-100 m-auto' onChange={(e)=>{
           setname( e.target.value)
        }} />
        <button className=' btn btn-outline-info ms-2'> search</button>
      </form>
   {searchlist?
   <div className='row g-4 mt-5'>
      {searchlist.map((item,idx)=><div key={idx} className='col-md-4'>
          <Dog item={item}/>  
      </div>)}
   </div>: allDogs? <>
    <div className="row g-4 mt-5 ">{allDogs.slice(0,slice).map((dog,idx)=><div key={idx} className="col-md-4">
    <Dog dog={dog}/>
   </div>) }
   </div> <button className='btn  btn-outline-dark d-block m-auto mt-5' onClick={()=>{
      const newslice=slice+9;
      setslice(newslice);
   }}>Get More</button>
   </>:<div className=' d-flex justify-content-center align-items-center vh-100'>
   <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
   </div>}
   
   </>
  )
}
