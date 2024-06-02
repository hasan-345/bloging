import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import services from '../appwrite/config'
import { useSelector } from 'react-redux'
import Button from './Button'
import parse from "html-react-parser"
function Post() {
    const {slug,user} = useParams()
    const [loading,setLoading] = useState("Delete")
   const [post,setPost] = useState()
 const userData = useSelector((state)=> state.userData)
  const isAuther = post && userData? post.userId === userData.$id : false; 

   const navigate = useNavigate()
    useEffect(()=>{
        if(slug){
            services.getPost(slug).then((response)=> {
               if(response){
                   setPost(response);
               }else{
                navigate("/home")
               }
            })
           }
           else{
               navigate("/home")
           }
    },[]) 
       
           
            const deletePost = ()=>{
                setLoading(<i class='bx bx-loader-circle bx-spin bx-rotate-90 icon' ></i>)
                services.deletePost(post.$id).then((status)=> {
                    if(status){
                        services.deleteFile(post.featuredImage)
                        setLoading("Delete")
                        navigate("/home")
                    }
                })
            }
    
  return  post?  (
    <div className='container'>
           <div className="post">
           <h2> {post.title} </h2>
          <div className="img">  <img src={services.getFilePreview(post.featuredImage)} alt={post.title}/></div>
           
            <div className='content'> {parse(post.content)} </div>
            <div className="btns">
                {isAuther &&
                <>
               <Link to={`/edit-post/${slug}`}> <div className="out-btn"> <Button className='btn'> Edit </Button></div></Link>
               <div className="out-btn">   <Button className='btn delet' onClick={deletePost} > {loading} </Button></div>
               <Link to="/home"> <div className="out-btn"> <Button className='btn'> Save </Button></div></Link>
                </>
                }
              
            </div>
            <p>Written by {post && user  } </p>
           </div>
    </div>
  ): (  <div className="outer-icon"> <i class='bx bx-loader-circle bx-spin bx-rotate-90 icon' ></i></div>
   )
}

export default Post