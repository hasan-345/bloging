import React, { useCallback, useEffect,useState } from 'react'
import {Button,Input,Select} from "./index.js"
import { useForm } from 'react-hook-form'
import RTE from './RTE.jsx'
import services from '../appwrite/config.js'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
function PostForm({post}) {

    const navigate = useNavigate()

    const [loading,setLoading] = useState();
  useEffect(()=>{
   if(post){
    setLoading("Update")
   }else{
    setLoading("Create")
   }
  },[])
    const {register,handleSubmit,control,watch,setValue,getValues} = useForm({
        defaultValues : {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status : post?.status || "active",
        }
    })
  const userData = useSelector((state)=> state.userData)
  if(post){
    setValue("slug",post.$id)
    setValue("title",post.title)
  setValue("status",post.status)
    setValue("content", post.content)
  }

  const submit = async (data)=>{
    setLoading(<i class='bx bx-loader-circle bx-spin bx-rotate-90 icon' ></i>)
       if(post){
         const file = data.image[0]? await services.uploadFile(data.image[0]) : false;
         if(file){
            services.deleteFile(post.featuredImage)
         }
         const update = await services.updatePost({...data,
            featuredImage: file? file.$id: post.featuredImage ,
            slug: post.$id
         }) 
        if(update){
          setLoading("Update")
          navigate("/home")
        }
       
  }else{
    setLoading(<i class='bx bx-loader-circle bx-spin bx-rotate-90 icon' ></i>)

        const file = await services.uploadFile(data.image[0]);
        if(file){
          const fileId = file.$id
           data.featuredImage = fileId
            const dbPost = await services.createPost({...data,
                  userId: userData.$id,
                  name: userData.name
            })
             console.log(dbPost);
            if(dbPost){
                navigate(`/post/${dbPost.$id}/${userData.name}`)
            }
            setLoading("Create")
        }
  }
  }

  const slugTranform = useCallback( (value)=>{
    if(value && typeof value === "string"){
        let slug = value.toLowerCase().replace(/ /g,"-")
        setValue("slug",slug);
        return slug
    }else{
        return "";
    }
  },[])

   useEffect(()=>{
  const subscription = watch((value,{name})=>{
        if(name === "title"){
            setValue("slug", slugTranform(value.title))
        }

        return ()=>{
            subscription.unsubscribe()
        }
  })
   },[slugTranform,watch,setValue])

  return (
    <div className='container'>
          <form className="forma" onSubmit={handleSubmit(submit)} >
            <div className="oneside">
               <div className='out out-input'> <Input {...register("title",{required:true})} type="text" placeholder="Enter title" className="input" /></div>
               <div className='out out-input'> <Input {...register("slug",{required:true})} onInput={(e)=> setValue("slug",slugTranform(e.currentTarget.value)) } type="text" readOnly placeholder="Slug" className="input" /></div>
               <RTE name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="oneside">
                <div className="out"><Input type="file" {...register("image",{required:true})} accept="image/png, image/jpg, image/jpeg, image/gif" className="input" /></div>
              <div className="select">  <Select options = {["active","inactive"]} {...register("status",{required:true})}  className="select-input" /></div>
                <div className="out-btn"> <Button type='submit' className='btn btn-post'  >  {loading} </Button> </div>
            </div>
          </form>
    </div>
  )
}

export default PostForm