import React from 'react';
import Modal from '../../Modal';
import Button from '../../Button';
import FormField from '../../FormField';
import { useFormik } from 'formik';
import axios from 'axios';

const RegisterModal = ({open, onClose, updateTokens}) => {
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      onSubmit: (values) => {
        if (values.password == values.confirmPassword) {
          axios.post('/api/auth/register', {firstName: values.firstName, lastName: values.lastName, email: values.email, password: values.password}).then((response) => {
            const {accessToken, refreshToken} = response.data;
            updateTokens(accessToken, refreshToken);
            onClose();
          }).catch(error => {
            console.log(error.response.data ? error.response.data : error.response);
          });
        }
        
      }
    });

    return (
        <Modal open={open}>
          <div className="bg-white px-4 pt-5 pb-4">
            <div className="mt-3 text-center">
              <h3 className="text-xl font-bold text-gray-900">
                Register
              </h3>
              <div className="mt-5">
                <form className="text-sm text-gray-500 flex flex-col gap-2">
                  <div className="flex gap-2">
                    <FormField id="firstName" name="First name" onChange={formik.handleChange} value={formik.values.firstName}/>
                    <FormField id="lastName" name="Last name" onChange={formik.handleChange} value={formik.values.lastName}/>
                  </div>
                  <FormField id="email" name="Email" type="email" onChange={formik.handleChange} value={formik.values.email}/>
                  <FormField id="password" name="Password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
                  <FormField id="confirmPassword" name="Confirm password" type="password" onChange={formik.handleChange} value={formik.values.confirmPassword}/>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-2">
            <Button onClick={formik.handleSubmit}>Register</Button>
            <button onClick={onClose} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Cancel
            </button>
          </div>
        </Modal>
    );
}

export default RegisterModal;