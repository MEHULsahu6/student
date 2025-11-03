const express = require('express');

const addmission =(req,res)=>{


  

const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    enrollmentNo: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },

    personalInfo: {
        firstName: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        gender: {
            type: String,
            enum: ['MALE', 'FEMALE', 'OTHER'],
            required: true
        },
        bloodGroup: {
            type: String,
            enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
        },
        category: {
            type: String,
            enum: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS'],
            required: true
        },
        
        religion: String,
        aadharNo: String,
        photoUrl: String
    },

    contactInfo: {
        email: { type: String, required: true },
        phone: { type: String, required: true },
        alternatePhone: String,
        address: {
            street: String,
            city: { type: String, required: true },
            state: { type: String, required: true },
            pincode: { type: String, required: true },
        }
    },

    guardianInfo: {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: String,
        relation: { type: String, required: true },
        occupation: String,
        annualIncome: Number
    },

    academicInfo: {
        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
            required: true
        },
        currentSemester: { type: Number, required: true },
        batchYear: { type: Number, required: true },
        academicYear: { type: String, required: true },
        admissionDate: { type: Date, required: true },
        rollNumber: String,
        section: String
    },

    documents: {
        tenthMarksheet: String,
        twelfthMarksheet: String,
        transferCertificate: String,
        migrationCertificate: String,
        casteCertificate: String,
        incomeCertificate: String,
        aadharCard: String,
        other: [String]
    },

    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE', 'SUSPENDED', 'GRADUATED', 'DROPOUT'],
        default: 'ACTIVE'
    },

    remarks: String
}, {
    timestamps: true
});



    res.send("Admission route working");
}


module.exports = {
    addmission
}