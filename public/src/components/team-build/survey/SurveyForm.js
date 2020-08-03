import React from 'react';

export default class SurveyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            internships: '',
            experienceAtInternships: '',
            subjectsInterestedIn: '',
            strongestCatagories: [],
            weakestCategories: [],
            mastersProgramInterest: '',
            errorMessage: undefined
        }
    }

    onInternshipsChange = (e) =>{
        const internships = e.target.value;
        this.setState(() => ({ internships }));
    };

    onExperienceChange = (e) =>{
        const experienceAtInternships = e.target.value;
        this.setState(() => ({ experienceAtInternships }));
    };

    onSubjectsChange = (e) => {
        const subjectsInterestedIn = e.target.value;
        this.setState(() => ({ subjectsInterestedIn }));
    }

    onStrongestChange = (e) => {
        const newCatagory = e.target.value;
        var strongestCatagories = [];
        if( this.state.strongestCatagories.includes(newCatagory)){
            strongestCatagories = this.state.strongestCatagories.filter((category) => category !== newCatagory );
        }else{
            strongestCatagories = this.state.strongestCatagories.concat(newCatagory);
        }

        this.setState(() => ({strongestCatagories}));
    }

    onWeakestChange = (e) => {
        const newCatagory = e.target.value;
        var weakestCategories = [];
        if( this.state.weakestCategories.includes(newCatagory)){
            weakestCategories = this.state.weakestCategories.filter((category) => category !== newCatagory );
        }else{
            weakestCategories = this.state.weakestCategories.concat(newCatagory);
        }

        this.setState(() => ({weakestCategories}));
    }

    onMastersChange = (e) => {
        const mastersProgramInterest = e.target.value;
        this.setState(() => ({ mastersProgramInterest}));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.internships || !this.state.experienceAtInternships || !this.state.subjectsInterestedIn){
            this.setState(() => ({ errorMessage: 'Please fill out all catagories!'}));
        }else{
            this.setState(() => ({ errorMessage: undefined}));
            this.props.onSubmit({
                internships: this.state.internships,
                experienceAtInternships: this.state.experienceAtInternships,
                subjectsInterestedIn: this.state.subjectsInterestedIn,
                strongestCatagories: this.state.strongestCatagories,
                weakestCategories: this.state.weakestCategories,
                mastersProgramInterest: this.state.mastersProgramInterest
            });
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
            {this.state.errorMessage && <p className="form__error">this.state.errorMessage</p>}
            <label>
                Where did you intern this past summer? If you’ve had more than one internship, or have participated in a co-op, please include them as well.
                <textarea
                    value={this.state.internships}
                    onChange={this.onInternshipsChange}
                >
                </textarea>
            </label>
            <br />
            <label>
                Please highlight your experiences at your internship(s). Be descriptive in your explanation; include any technologies you may have used.
                <textarea
                    value={this.state.experienceAtInternships}
                    onChange={this.onExperienceChange}
                >
                </textarea>
            </label>
            <br />
            <label>
                Please list three different subject areas that you would be interested in learning more about during your Capstone experience. Be specific. (Examples include: web development, database architecture, workflows, etc.)
                <textarea
                    value={this.state.subjectsInterestedIn}
                    onChange={this.onSubjectsChange}
                >
                </textarea>
            </label>
            <br />
            <label>
                Based on your performance in past MIS classes and your internship experience, in which of the following categories would you say you feel strongest?
                <select
                    multiple={true}
                    value={this.state.strongestCatagories}
                    onChange={this.onStrongestChange}
                >
                    <option value="Analyitcal Skills">Analytical Skills</option>
                    <option value="Technical Skills">Technical Skills</option>
                    <option value="Communication Skills">Communication Skills</option>
                    <option value="Team Skills">Team Skills</option>
                </select>
            </label>
            <br />
            <label>
                Based on your performance in past MIS classes and your internship experience, in which of the following categories would you say you feel weakest?
                <select
                    multiple={true}
                    value={this.state.weakestCategories}
                    onChange={this.onWeakestChange}
                >
                    <option value="Analytical Skills">Analytical Skills</option>
                    <option value="Technical Skills">Technical Skills</option>
                    <option value="Communication Skills">Communication Skills</option>
                    <option value="Team Skills">Team Skills</option>
                </select>
            </label>
            <br />
            <label>
                Do you have any interest in the MIS Masters’ program?
                <select
                    value={this.state.mastersProgramInterest}
                    onChange={this.onMastersChange}
                >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Maybe">Maybe</option>
                </select>
            </label>
            <button className="button">Submit Form</button>
            </form>
        )
    }
    
}




