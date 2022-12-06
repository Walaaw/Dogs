import React from 'react'
import { Link } from 'react-router-dom';
import dogstyle from './Dog.module.css';
export default function Dog({dog,item}) {
  return (
    <>
    <div className={`bg-white shadow-sm rounded p-2 ${dogstyle.box} `}>
    
     <figure>
     <Link to={item?`/details/${item.name}`:`/details/${dog.name}`}> <img src={item?`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`:dog.image.url} alt="dog"  className={`w-100 rounded ${dogstyle.dog}`}/> </Link>
        <figcaption >
            <p className={`fw-bold p-2 pb-0 fs-5 ${dogstyle.dogname}`}>{item?item.name:dog.name}</p>
            <p className={`px-2 pb-2 ${dogstyle.title}`}>{item?`Bred For : ${item.bred_for}`:`Bred For : ${dog.bred_for}`}</p>
        </figcaption>
       </figure>
    
    </div>
    </>
  )
}
