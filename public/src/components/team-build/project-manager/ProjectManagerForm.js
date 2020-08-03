import React from 'react';

export default class ProjectManagerForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: props.projectManager ? props.projectManager.name : '',
            email: props.projectManager ? props.projectManager.email : '',
            errorMessage: undefined
        };
    };

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() =>({ email }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.name || !this.state.email){
            this.setState(() => ({errorMessage: 'Please fill out all neccessary fields'}));
        }else{
            this.setState(() => ({ errorMessage: undefined}));
            this.props.onSubmit({
                name: this.state.name,
                email: this.state.email,
            });
        }
    };

    render() {
        return (
            <div>
                
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.errorMessage && <p className="form__error">this.state.errorMessage</p>}
                    <input 
                        type="text"
                        placeholder="Name"
                        autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <input 
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <div>
                        <button className="button"> Save Project Manager </button>
                    </div>
                </form>
            </div>
        );
    };
}