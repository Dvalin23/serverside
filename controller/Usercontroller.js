//import UserModel from "../model/Usermode"

const userModel = require("../model/Usermode.js")

// crud
/**
 * create (post)
 * read(Get): general get and single get
 * update
 * delete
 */

// creating user
 const CreateUser = async (req , res)=>{
    try{
        const {name , email ,password} = req.body
        const user = await userModel.create({
            name, email, password
        })
        return res.status(201).json({
            mesagge :"User created sucessfully",
            data : user
        })
    }catch(error){
        res.status(500).json({message: error.message})
    }

} 

// General Get 

 const GetAllUsers = async (req,res)=>{
    try{
        const getAll = await userModel.find()
        message : " All users retrived suceesfully"
        data : getAll
    }catch (error){
        return res.status(500).json({
            message : error.message
        })
    }
}

// Single Get

 const GetSingleUser = async (req,res)=>{
    try{
        const {id} = req.params
        const GetSingle = await userModel.findById(id)
        if(!GetSingle){
            return res.status(404).json({
                message : "Unable to fetch User"
            })
        }
        return res.status(200).json({
            message : " User retrived suceesfully",
            data : GetSingle
        })
    }catch (error){
        return res.status(500).json({
            message : error.message
        })
    }
}

// Update user 
 const UpdateUser = async (req,res)=>{
    try{
        const {id }= req.params
        const {name, password, email} = req.body 
        const update = await userModel.findByIdAndUpdate(id,{
            name,  password
        }, {new : true})

        return res.status(200).json({
            message : "USer updated",
            data : update
        
        })

    }catch (error){
        return res.status(500).json({
            message : error.message
        })
    }
} 

// delete user 

 const Deleteuser = async (req,res)=>{
    try{
        const {id} = req.params
        const deleteUser = await userModel.findByIdAndDelete(id)
        res.status(200).json({
            mesagge : "User deleted sucessfully",
            data : deleteUser
        })
    }catch (error){
        return res.status(500).json({
            message : error.message
        })
    }
}

module.exports={CreateUser,GetAllUsers,GetSingleUser,UpdateUser,Deleteuser}