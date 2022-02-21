import React from 'react';
import Button from './components/Button';
import axios from 'axios'
import CreateIssueModal from './components/modals/issues/CreateIssueModal';

class IssueTestView extends React.Component {
    state = {
        issues: [],
        createIssueModalOpen: false
    }

    getIssues = () => {
        axios.defaults.headers.common = {'Authorization': `Bearer ${this.props.accessToken}`}

        axios.get('/api/issues').then(response => {
          console.log(response.data);
          this.setState({issues: response.data})
        });
    }

    componentDidMount() {
        this.getIssues();
    }
  
    handleCreateIssueButtonClick = (e) => {
        e.preventDefault();
        this.setState({createIssueModalOpen: true});
    }

    handleCreateIssueModalClose = (e) => {
        if (e) e.preventDefault();
        this.setState({createIssueModalOpen: false});
    }

    render() {
        return (
            <div className="flex items-center justify-center">
                <div className="border rounded-lg p-8 text-white shadow-xl text-center m-8 bg-gray-500 border-gray-600">
                    <h1 className="text-2xl mb-4">Issue Test View</h1>
    
                    <div className="flex gap-5 justify-center py-4">
                        <Button onClick={this.getIssues}>Refresh issues</Button>
                        <Button onClick={this.handleCreateIssueButtonClick}>Create issue</Button>
                    </div>
    
                    <CreateIssueModal open={this.state.createIssueModalOpen} onClose={this.handleCreateIssueModalClose}/>
    
                    <hr className="my-4"/>

                    {this.state.issues.map(issue => (
                        <div key={issue._id}>
                            <h3 className="text-xl">Title: {issue.title}</h3>
                            <div>Description: {issue.description}</div>
                            <div>Project: {issue.project.name}</div>
                        </div>
                    ))}
                </div>
            </div>
      );
    }
};

export default IssueTestView;