import React from 'react'
import {Button} from "./index.js"
import { Link } from 'react-router-dom'
import services from '../appwrite/config.js'
import { useParams } from 'react-router-dom'
function PostCard({$id,title,featuredImage,name}) {
  
  return (
  
    <div className='card'>
       <img src={services.getFilePreview(featuredImage)} alt="" />
       <div className="title"><h3> {title} </h3></div>
       <div className="out-btn"> <Link to={`/post/${$id}/${name}`}> <Button className='btn btn-post'>Read more</Button></Link> </div>
    </div>
  )
}

export default PostCard