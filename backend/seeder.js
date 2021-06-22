import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Orders from './models/orderModel.js'
import connectDB from './config/db'

dorenv.config()
connectDB()

const importData = async()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createUsers = await User.insertMany(users)
        const adminUser = createUsers[0]._id

        const sampleProducts = products.map(product => {
              return{ product, adminUser}
        })

    }catch(error){

    }
} 