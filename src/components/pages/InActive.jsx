
import React, { useEffect, useState } from 'react'
import service from '../../appwrite/config';
import PostCard from '../PostCard';
import { Link } from 'react-router-dom';
import {Button} from "../index"
function InActive() {
    const [post,setpost] = useState()
    useEffect(()=>{
        service.getNonActivePosts().then((posts)=> {
            if(posts){
                setpost(posts.documents)
            }
        })
    })
    
   if(post?.length === 0){
    return (
      <div className="outer-icon"> <div>  
      <div className="out-btn"> Nothing </div>
      </div></div>
    )
   }else{
    return (
      <div className='container'>
      {post !== null? (
       <div>
          {
            post?.map((posts)=> 
          <>
              <PostCard  {...posts} />
         
          </>
  
            )
          } 
    </div> 
          
    
    )  : (<div className="outer-icon"> <i class='bx bx-loader-circle bx-spin bx-rotate-90 icon' ></i></div> ) }
    
  </div>
  )
   }
}

export default InActive