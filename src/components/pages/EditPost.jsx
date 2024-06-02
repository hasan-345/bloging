import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import services from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm';
function EditPost() {
    const navigate = useNavigate();
    const {slug} = useParams();
   const [post,setPost] = useState()
   useEffect(()=>{
    if(slug){
    services.getPost(slug).then((res)=> {
        if(res){
            setPost(res)
        }
    })
    }else{
        navigate("/home")
    }
   },[slug,navigate])
  return (
    <div>
       <PostForm post={post} />
    </div>
  )
}

export default EditPost