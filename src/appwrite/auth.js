import { Client, Account,ID } from "appwrite";
import conf from '../conf/conf.js'
export class AuthServices {
    client = new Client();
    account;
    constructor(){
     this.client.setEndpoint(conf.appWrite).setProject(conf.projectId)
     this.account = new Account(this.client)
    }
 
   async createAccount({email,password,name}){
    try {
        const userData = await this.account.create(ID.unique(),email,password,name)
        if(userData){
        return this.login({email,password}) ;
    }
    } catch (error) {
        console.log("no account created",error.message)
        return false;
    }
    
   }
   
   async login({email,password}){

    try {
    return await this.account.createEmailPasswordSession(email,password)
        
    } catch (error) {
        console.log("No login",error.message)
        return false
    }
   }
   
   async logOut(){
    try {
     await this.account.deleteSessions()
        
    } catch (error) {
        console.log(error.message)
    }
   }
   
   async getCurrentAccount(){
    try {
        return await this.account.get()
    } catch (error) {
        console.log(error.message)
    }
    return null
   }
}

const authServ = new AuthServices()

export default authServ