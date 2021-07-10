import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            render: props.open,
            show: props.open
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.open != this.props.open) {
            if (this.props.open) {
                this.setState({render: true, show: false});
                setTimeout(() => this.setState({show: true}), 1);
            } else {
                this.setState({show: false});
                setTimeout(() => this.setState({render: false}), 200);
            }
        }
    }

    render() {
        return this.state.render ? (
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            
                    <div className={"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" + (this.state.show ? " ease-out duration-300 opacity-100" : " ease-in duration-200 opacity-0")} aria-hidden="true"></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    
                    <div className={"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full" + (this.state.show ? " ease-out duration-300 opacity-100 translate-y-0 sm:scale-100" : " ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95")}>
                        {this.props.children}
                    </div>
    
                </div>
            </div>
        ) : null
    }
}

export default Modal;