import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

function Login() {
    const navigate=useNavigate()
    const validationSchema=Yup.object({
        email:Yup.string().email('Invalid email')
        .required('email required'),
        password:Yup.string().required('password required')
    })
  return (
    <div className="p-4 max-w-md mx-auto mt-10">
      <div>
        <h2 className='text-3xl text-green-700 mb-4'>Login</h2>
        <Formik
     
       initialValues={{ email: "", password: "" }}
       validationSchema={validationSchema}
       onSubmit={async (values, { setSubmitting }) => {
         try {
           const response = await axios.get("http://localhost:3001/user");
           const user = response.data.find((use) => use.email === values.email);

           if (user) {
             if (user.blocked) {
               alert("Your account is blocked. Please contact support.");
             } else if (user.password === values.password) {
              // alert("Login successful!");
               localStorage.setItem("id", user.id);
               localStorage.setItem("name", user.name);
               localStorage.setItem("userRole", user.admin);

               if (user.admin) {
                 navigate("/admin");
               } else {
                 navigate("/");
               }
             } else {
              alert("Incorrect password");
             }
           } else {
            alert("Email not found or incorrect password");
           }
         } catch (error) {
           alert("An error occurred: " + error.message);
         }
         setSubmitting(false);
       }}
        >
            {({isSubmitting})=>(
                <Form>
                     <div div className="mb-4">
                    <label className='block text-gray-700'>Email:</label>
                    <Field type='email' id='email' name='email' className='border p-2 w-full'/>
                    <ErrorMessage name='email' component='p' className='text-red-500'/>
                </div>
                <div className="mb-4">
                    <label className='block text-gray-700'>Password:</label>
                    <Field type='password' id='password'  name='password' className='border p-2 w-full'/>
                    <ErrorMessage name='password' component='p' className='text-red-500'/>
                </div>
                <div  className="mb-4">
                <button type='submit' disabled={isSubmitting} className='bg-green-700 text-white px-4 py-2 rounded'>
                    {isSubmitting?"submitting....":"Login"}
                </button>
                </div>
                </Form>
            )}
            
        </Formik>
        <p>Don't have an account <Link to='/signin' className='text-red-700'>Login</Link></p>
        </div>
    </div>
  )
}

export default Login
