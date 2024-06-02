import { Client, Databases, ID, Query,Storage } from "appwrite";
import conf from "../conf/conf";

export class Service {
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client.setEndpoint(conf.appWrite).setProject(conf.projectId)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client) 
    }

  async createPost({title,slug,featuredImage,content,status,userId,name}){
     try {
        return await this.databases.createDocument(
            conf.databaseId,
            conf.collectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,
                name
            }
        )
     } catch (error) {
        console.log("createPost error")
        return error.message
     }
  }

  async updatePost({title,slug,featuredImage,content,status}){
    try {
        return await this.databases.updateDocument(
            conf.databaseId,
            conf.collectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        )
    } catch (error) {
        console.log("update post error")
        return error.message
    }
  }
  
  async deletePost(slug){
    try {
        await this.databases.deleteDocument(
            conf.databaseId,
            conf.collectionId,
            slug
        )

        return true
    } catch (error) {
        return false
    }
  }

  async uploadFile(file){
     try {
        return await this.storage.createFile(
            conf.bucketId,
            ID.unique(),
            file
        )
     } catch (error) {
        return error.message
     }
  }

  async deleteFile(fileId){
    try {
        await this.storage.deleteFile(
            conf.bucketId,
            fileId
        )
        return true
    } catch (error) {
        return false
    }
  }

  async getAllPosts(){
    try {
        return await this.databases.listDocuments(
            conf.databaseId,
            conf.collectionId,
            [
                Query.equal("status","active")
            ]
        )
    } catch (error) {
        return error.message
    }
  }

  async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.databaseId,
            conf.collectionId,
            slug
          )
    } catch (error) {
        console.log("getPost error")
        return error.message
    }
     
  }

   getFilePreview(fileId){
        return  this.storage.getFilePreview(
            conf.bucketId,
            fileId
        )
  }

  async getNonActivePosts(){
    try {
        return await this.databases.listDocuments(
            conf.databaseId,
            conf.collectionId,
            [
                Query.equal("status","inactive")
            ]
        )
    } catch (error) {
        console.log("Non active posts error",error.message)
        return error.message
    }
  }
}

const services = new Service()

export default services;