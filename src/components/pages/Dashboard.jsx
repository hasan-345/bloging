import React,{useState,useEffect} from 'react'
import services from '../../appwrite/config';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button';
import PostCard from '../PostCard';
function Dashboard() {
    const [posts,setPosts] = useState();
    const [loading,setLoading] = useState("Create post")
    const userData = useSelector((state)=> state.userData)
    useEffect(()=>{
      try {
        services.getAllPosts().then((post)=>{
          if(post){
              setPosts(post.documents)
              console.log(posts)
          }
       })
      } catch (error) {
        
      }
     
        
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

export default Dashboard