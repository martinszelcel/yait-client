import React from 'react';
import Modal from '../../Modal';
import Button from '../../Button';
import FormField from '../../FormField';
import { Formik } from 'formik';
import axios from 'axios';

class CreateProjectModal extends React.Component {
    render() {
      return (
        <Modal open={this.props.open}>
          <Formik
            initialValues={{
              name: '',
              description: '',
            }}
            onSubmit={(values) => {
              axios.post('/api/projects', {name: values.name, description: values.description}).then((response) => {
                console.log(response);
                this.props.onClose();
              }).catch(error => {
                console.log(error.response.data ? error.response.data : error.response);
              });
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
            }) => (
              <div>
                <div className="bg-white px-4 pt-5 pb-4">
                  <div className="mt-3 text-center">
                    <h3 className="text-xl font-bold text-gray-900">
                      Create project
                    </h3>
                    <div className="mt-5">
                      <form onSubmit={handleSubmit} className="text-sm text-gray-500 flex flex-col gap-2">
                        <FormField id="name" name="Name" type="text" onChange={handleChange} value={values.name}/>
                        <FormField id="description" name="Description" type="textarea" onChange={handleChange} value={values.description}/>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-2">
                  <Button onClick={handleSubmit}>Create project</Button>
                  <button onClick={this.props.onClose} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </Formik>
        </Modal>
      );
    }
}

export default CreateProjectModal;