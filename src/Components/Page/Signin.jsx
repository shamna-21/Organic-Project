import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Signin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(5, 'Password should contain at least 5 characters'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  return (
    <div className="p-4 max-w-md mx-auto mt-10">
      <h2 className='text-3xl text-green-700 mb-4'>Signup</h2>
      {error && <p className='text-green-500 mb-4'>{error}</p>}
      <Formik
        initialValues={{ name: '', email: '', password: '', confirmpassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const { confirmpassword, ...val } = values;
          const dataToSubmit = { ...val, cart: [],payment:[],blocked:false };
          axios.post('http://localhost:3001/user', dataToSubmit)
            .then(() => {
              navigate('/login');
            })
            .catch((error) => {
              console.error('Error during registration:', error);
              setError('Registration failed. Please try again.');
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor='name' className='block text-gray-700'>Name:</label>
              <Field type='text' id='name' name='name' className='border p-2 w-full' />
              <ErrorMessage name='name' component='p' className='text-red-500' />
            </div>
            <div className="mb-4">
              <label htmlFor='email' className='block text-gray-700'>Email:</label>
              <Field type='email' id='email' name='email' className='border p-2 w-full' />
              <ErrorMessage name='email' component='p' className='text-red-500' />
            </div>
            <div className="mb-4">
              <label htmlFor='password' className='block text-gray-700'>Password:</label>
              <Field type='password' id='password' name='password' className='border p-2 w-full' />
              <ErrorMessage name='password' component='p' className='text-red-500' />
            </div>
            <div className="mb-4">
              <label htmlFor='confirmpassword' className='block text-gray-700'>Confirm Password:</label>
              <Field type='password' id='confirmpassword' name='confirmpassword' className='border p-2 w-full' />
              <ErrorMessage name='confirmpassword' component='p' className='text-red-500' />
            </div>
            <button type='submit' disabled={isSubmitting} className='bg-green-700 text-white px-4 py-2 rounded'>
              {isSubmitting ? 'Submitting....' : 'Signup'}
            </button>
          </Form>
        )}
      </Formik>
      <p className='mt-4'>
        Already have an account? <Link to='/login' className='text-red-700'>Login</Link>
      </p>
    </div>
  );
}

export default Signin;
