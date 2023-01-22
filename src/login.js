import React from "react";
import {Formik,Form,Field } from "formik";
import * as Yup from "yup" 
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Signup=Yup.object().shape({
        
    firstname:Yup.string("enter a valid name").min(3,"name  can not be less than 3 characters" ).max(30,"name is too long").required("first name is required"),
  
    lastname:Yup.string("enter a valid name").min(3,"lastname  can not be less than 3 characters" ).max(30,"lastname is too long").required("last name is required"),
  
    email:Yup.string("email is invalid").email().required("Email is required"),
  
    age:Yup.string("age is invalid").required("Enter your age please"),
  
    gender:Yup.string().required("Enter your gender"),
  
    password:Yup.string().required("password is required").min(6,"password can not be less than 6 characters").max(12,"password is too long")
    
    
  
  })
  
  
  

function Login(){
    
const [initialFormValues]=useState({
    firstname:"",
    lastname:"",
    age:"",
    gender:"",
    email:"",
    password:""
})
let navigate=useNavigate();
let handleSubmit=async(values)=>{
    console.log(values);
    navigate("/SignUp", true);
}


 
return(
    <>
    <h1> Log in to To Do App</h1>
    <Formik validationSchema={Signup}  initialValues={initialFormValues} onSubmit={handleSubmit}>
        {({errors,touched})=>(

            <Form >
                <div>
                <label>First name
                <Field type="text" name="firstname" />
                </label>
               
                </div> 
                {errors.firstname && touched.firstname ? <div>{errors.firstname}</div>:null }
                <div>
                <label>Last name 
                <Field type="text" name="lastname" />
                </label>
                </div>
                {errors.lastname && touched.lastname ? <div>{errors.lastname}</div>:null }
                <div>
                    <label >age
                <Field type="number" name="age" />
                

                </label></div>
                {errors.age && touched.age? <div>{errors.age}</div>:null }
                <div><label >Gender 

         <Field type="text" name="gender" />
            </label></div>
            {errors.gender && touched.gender? <div>{errors.gender}</div>:null }


                <div><label >Email 

            <Field type="email" name="email"/>
                </label></div>
                {errors.email && touched.email? <div>{errors.email}</div>:null }

                
                <div><label >password 

            <Field type="password" name="password"/>
                </label>
                
                </div>
                {errors.password && touched.password? <div>{errors.password}</div>:null }

               
            <button type="submit">Sign Up</button>

            </Form>
        )}


    </Formik>
    </>
)
}
 
export default Login;