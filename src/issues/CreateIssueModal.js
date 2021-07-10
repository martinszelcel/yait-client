import React from 'react';
import Modal from '../elements/Modal';
import Button from '../elements/Button';
import FormField from '../elements/FormField';
import { useFormik } from 'formik';
import axios from 'axios';

const CreateIssueModal = ({open, onClose}) => {
    const formik = useFormik({
      initialValues: {
        title: '',
        description: '',
      },
      onSubmit: (values) => {
        axios.post('/api/issue', {title: values.title, description: values.description}).then((response) => {
          console.log(response);
          onClose();
        }).catch(error => {
          console.log(error.response.data ? error.response.data : error.response);
        });
      }
    });

    return (
        <Modal open={open}>
          <div className="bg-white px-4 pt-5 pb-4">
            <div className="mt-3 text-center">
              <h3 className="text-xl font-bold text-gray-900">
                Create issue
              </h3>
              <div className="mt-5">
                <form className="text-sm text-gray-500 flex flex-col gap-2">
                  <FormField id="title" name="Title" type="text" onChange={formik.handleChange} value={formik.values.title}/>
                  <FormField id="description" name="Description" type="textarea" onChange={formik.handleChange} value={formik.values.description}/>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-2">
            <Button onClick={formik.handleSubmit}>Create issue</Button>
            <button onClick={onClose} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Cancel
            </button>
          </div>
        </Modal>
    );
}

export default CreateIssueModal;