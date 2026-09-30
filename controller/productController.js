
const productModel = require('../model/productModel ')
const UserModel = require('../model/Usermode')

// create


const uploadProduct = async (req,res) =>{
 try{  
        const GetUserid = await UserModel.findById(req.params.id)
    const {name,description, price, category, stock , quantity, image } = req.body
    if(!GetUserid){
        return res.status(404).json({
            message: "User not found"
        })
    }
    const product = await productModel.create({
        name,description, price, category, stock , quantity, image
    })

    await GetUserid.products.push(product._id)
    await GetUserid.save()
    return res.status(201).json({
        message : "product Uploaded sucessfully", product


    })

}catch(error){
    return res.status(500).json({
        message: error.message
    })   
}}

//get all

const GettAllProduct = async (req,res) =>{
    try{
        const GetAll = await productModel.find()
        
        return res.status(200).json({
            mesagge: 'All product gotten sucessfully',
            data : GetAll
        })
    }catch(error){
        return res.staus(500).json({
            message: error.message
        })
    }
    
}



module.exports ={
    uploadProduct,
    
    GettAllProduct,
}

