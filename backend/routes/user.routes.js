const express = require('express');
const app = express();
const userExpressRoute = express.Router();
let userSchema = require('../model/user.model');

userExpressRoute.route('/').get((req,res)=>{
    userSchema.find((error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

userExpressRoute.route('/user/:id').get((req,res)=>{
   userSchema.findById(req.params.id,(error,data)=>{
    if (error) {
        return next(error)
    } else {
        res.json(data)
    }
   }) 
})

userExpressRoute.route('/add-user').post((req,res,next)=>{
    userSchema.create(req.body,(error, data) =>{
    if (error) {
        return next(error)
    } else {
        res.json(data)
    }
})
})


userExpressRoute.route('/del-user/:id').delete((req,res)=>{
    userSchema.findByIdAndRemove(req.params.id,(error,data)=>{
     if (error) {
         return next(error)
     } else {
        res.status(200).json({
            msg: data
        })
     }
    }) 
 })


 userExpressRoute.route('/update-user/:id').put((req,res)=>{
    userSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(error,data)=>{
     if (error) {
         return next(error)
     } else {
         res.json(data);
         console.log('Deleted Successfully!')
     }
    }) 
 })


module.exports = userExpressRoute;