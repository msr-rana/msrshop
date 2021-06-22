import mongoose from 'mongoose'

const reviews = mongoose.Schema({
    name:{ type:String, required:true},
    rating:{ type:Number, required:true},
    comment:{ type:String, required:true}
},
{
    timestamp:true
})

const productSchema = mongoose.Schema({
    user: {
       type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },

    name:{
        type: String,
        required :true
    },
    image:{
        type:String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    category:{
        type: Boolean,
        required: true,
        default: false
    },
    discription:{
        type: Boolean,
        required: true,
        default: false
    },
    reviews:[reviewSchema],
    rating:{
        type: Number,
        required: true,
        default: 0
    },
    numReviews:{
        type: Number,
        required: true,
        default: 0
    },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    countInStock:{
        type: Number,
        required: true,
        default: 0
    },
},{
    timestamp:true
})

const Product = mongoose.model('Product', productSchema)

export default Product