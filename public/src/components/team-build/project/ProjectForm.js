import React from 'react';

export default class ProjectForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: props.project ? props.project.title : '',
            company: props.project ? props.project.company : '',
            tags: props.project ? props.project.tags : []
        };
    };

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };

    onCompanyChange = (e) => {
        const company = e.target.value;
        this.setState(() =>({ company }));
    };

    onTagsChange = (e) => {
        const newTag = e.target.value;
        var tags = [];
        if(this.state.tags.includes(newTag)){
            tags = this.state.tags.filter((tag) => tag !== newTag);
        }else{
            tags = this.state.tags.concat(newTag);
        }
        this.setState(() => ({tags}));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.title || !this.state.company || this.state.tags.length === 0){
            this.setState(() => ({errorMessage: 'Please fill out all neccessary fields'}));
        }else{
            this.setState(() => ({ errorMessage: undefined}));
            this.props.onSubmit({
                title: this.state.title,
                company: this.state.company,
                tags: this.state.tags
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
                        placeholder="Title of Project"
                        autoFocus
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    />
                    <input 
                        type="text"
                        placeholder="Company"
                        value={this.state.company}
                        onChange={this.onCompanyChange}
                    />
                    <select
                        multiple={true}
                        value={this.state.tags}
                        onChange={this.onTagsChange}
                    >
                        <option value="Web Development">Web Development</option>
                        <option value="Database Architecture">Databasbe Architecture</option>
                        <option value="Analytical Skills">Analytical Skills</option>
                        <option value="Technical Skills">Technical Skills</option>
                        <option value="Communication Skills">Communication Skills</option>
                        <option value="Team Skills">Team Skills</option>
                    </select>
                    <button> Save Project</button>
                </form>
            </div>
        );
    };
}