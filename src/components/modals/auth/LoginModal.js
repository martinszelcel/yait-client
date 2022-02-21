import React from 'react';
import Modal from '../../Modal';
import Button from '../../Button';
import FormField from '../../FormField';
import { useFormik } from 'formik';
import axios from 'axios';

const LoginModal = ({open, onClose, updateTokens}) => {
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: (values) => {
        axios.post('/api/auth/login', {email: values.email, password: values.password}).then((response) => {
          const {accessToken, refreshToken} = response.data;
          updateTokens(accessToken, refreshToken);
          onClose();
        }).catch(error => {
          console.log(error);
          console.log(error.response && error.response.data ? error.response.data : error.response);
        });
        
      }
    });

    return (
        <Modal open={open}>
          <div className="bg-white px-4 pt-5 pb-4">
            <div className="mt-3 text-center">
              <h3 className="text-xl font-bold text-gray-900">
                Login
              </h3>
              <div className="mt-5">
                <form className="text-sm text-gray-500 flex flex-col gap-2">
                  <FormField id="email" name="Email" type="email" onChange={formik.handleChange} value={formik.values.email}/>
                  <FormField id="password" name="Password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-2">
            <Button onClick={formik.handleSubmit}>Login</Button>
            <button onClick={onClose} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Cancel
            </button>
          </div>
        </Modal>
    );
}

export default LoginModal;