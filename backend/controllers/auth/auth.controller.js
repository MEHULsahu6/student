const express = require('express');
const mongoose = require('mongoose');
const User = require('../../models/userModel');

const register = async(req, res) => {
 try {
  const {name, email, password,role} = req.body;

  const existingUser = await User.findOne({email});

    if(existingUser){
        return res.status(404).json({
            success:false,
            message:"User Already Exists"
        });
    }

  const user = await User.create({
    name,
    email,
    password,
    role
  });
  res.status(200).json({
    success: true,
    message: "Registered Successfully",
  });
 } catch (error) {
  console.log(error);
    res.status(500).json({
        success: false,
        message: "Registration Failed",
    });
 }
};


const login = async(req,res)=>{
try {
    const {email,password} = req.body;

    const user = await User.findOne({email,password});
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User not found"
        });
    }
    res.status(200).json({
        success:true,
        message:"Login Successful"
    });
    
} catch (error) {
    console.log(error);
    res.status(500).json({
        success: false,
        message: "Registration Failed",
    });
 }
}


module.exports =  {register,login} 
