import React, { useEffect, useState } from 'react'
import services from '../../appwrite/config'
import PostCard from "../PostCard"
import { Link } from 'react-router-dom';
import {Button} from "../index"
import { useSelector } from 'react-redux';
function Allposts() {
  const userData = useSelector((state)=> state.userData)
    const [posts,setPosts] = useState();
    useEffect(()=>{
     services.getAllPosts().then((post)=>{
      console.log(post.documents)
        if(post){
            setPosts(post.documents)

        }
     });
        
    },[])
    if(posts?.length === 0){
      return (
       <div className="outer-icon"> <div>  
       <Link to="/add-post" > <div className="out-btn"> <Button className='btn'> Create post</Button> </div></Link>
       </div></div>
      )
    }else{
   
       return (
   
         <div className='container'>
           <div className="all-posts">
         {posts && <div className='intro'> <h1>Hey! {userData.name}</h1>  </div>}
       {posts &&   posts !== null? ( <div className='flex'>
            {posts.map((post)=> (
               <PostCard key={post.$id} {...post} />
            ))}</div>)
            
            : (<div className="outer-icon"> <i class='bx bx-loader-circle bx-spin bx-rotate-90 icon' ></i></div> )}
           </div>
       </div>
       )
     }
}

export default Allposts