import React from 'react';

export default class StudentForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: props.student ? props.student.name : '',
            email: props.student ? props.student.email : '',
            rank: props.student ? props.student.rank : '',
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

    onRankChange = (e) => {
        const rank = e.target.value;
        this.setState(() => ({ rank }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.name || !this.state.email || !this.state.rank){
            this.setState(() => ({ errorMessage: "Please provide all fields" }));
        } else{
            this.setState(() => ({ errorMessage: undefined}));
            this.props.onSubmit({
                name: this.state.name,
                email: this.state.email,
                rank: this.state.rank
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.errorMessage && <p>this.state.errorMessage</p>}
                <form onSubmit={this.onSubmit}>
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
                    <input 
                        type="number"
                        placeholder="Rank"
                        value={this.state.rank}
                        onChange={this.onRankChange}
                    />
                    <button> Save Student </button>
                </form>
            </div>
        );
    };
}