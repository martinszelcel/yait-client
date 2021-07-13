import React from 'react';
import Button from './elements/Button';
import axios from 'axios'
import CreateProjectModal from './projects/CreateProjectModal';

class ProjectTestView extends React.Component {
    state = {
        projects: [],
        createIssueModalOpen: false
    }

    getProjects = () => {
        axios.defaults.headers.common = {'Authorization': `Bearer ${this.props.accessToken}`}

        axios.get('/api/projects').then(response => {
          console.log(response.data);
          this.setState({projects: response.data})
        });
    }

    componentDidMount() {
        this.getProjects();
    }
  
    handleCreateProjectButtonClick = (e) => {
        e.preventDefault();
        this.setState({createProjectModalOpen: true});
    }

    handleCreateProjectModalClose = (e) => {
        if (e) e.preventDefault();
        this.setState({createProjectModalOpen: false});
    }

    render() {
        return (
            <div className="flex items-center justify-center">
                <div className="border rounded-lg p-8 text-white shadow-xl text-center m-8 bg-gray-500 border-gray-600">
                    <h1 className="text-2xl mb-4">Project Test View</h1>
    
                    <div className="flex gap-5 justify-center py-4">
                        <Button onClick={this.getProjects}>Refresh projects</Button>
                        <Button onClick={this.handleCreateProjectButtonClick}>Create project</Button>
                    </div>
    
                    <CreateProjectModal open={this.state.createProjectModalOpen} onClose={this.handleCreateProjectModalClose}/>
    
                    <hr className="my-4"/>

                    {this.state.projects.map(project => (
                        <div key={project._id}>
                            <h3 className="text-xl">Name: {project.name}</h3>
                            <div>Description: {project.description}</div>
                        </div>
                    ))}
                </div>
            </div>
      );
    }
};

export default ProjectTestView;