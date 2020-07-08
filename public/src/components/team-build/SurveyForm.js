import React from 'react';

export default class SurveyForm extends React.Component {
    state = {
            
                internships: '',
                experienceAtInternships: '',
                subjectsInterestedIn: '',
                strongestCatagories: [],
                weakestCategories: [],
                mastersProgramInterest: ''
    };

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
        const strongestCatagories = e.target.value;
        this.setState(() => ({ strongestCatagories }));
    }

    onWeakestChange = (e) => {
        const weakestCategories = e.target.value;
        this.setState(() => ({ weakestCategories }));
    }

    onMastersChange = (e) => {
        const mastersProgramInterest = e.target.value;
        this.setState(() => ({ mastersProgramInterest}));
    }
    
    render() {
        return (
            <div>
            <form>
            <label>
                Where did you intern this past summer? If you’ve had more than one internship, or have participated in a co-op, please include them as well.
                <textarea
                    value={this.state.internships}
                    onChange={this.onInternshipsChange}
                >
                </textarea>
            </label>
            <label>
                Please highlight your experiences at your internship(s). Be descriptive in your explanation; include any technologies you may have used.
                <textarea
                    value={this.state.experienceAtInternships}
                    onChange={this.onExperienceChange}
                >
                </textarea>
            </label>
            <label>
                Please list three different subject areas that you would be interested in learning more about during your Capstone experience. Be specific. (Examples include: web development, database architecture, workflows, etc.)
                <textarea
                    value={this.state.subjectsInterestedIn}
                    onChange={this.onSubjectsChange}
                >
                </textarea>
            </label>
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
            <label>
                Based on your performance in past MIS classes and your internship experience, in which of the following categories would you say you feel weakest?
                <select
                    multiple={true}
                    value={this.state.weakestCategories}
                    onChange={this.onWeakestChange}
                >
                    <option value="Analyitcal Skills">Analytical Skills</option>
                    <option value="Technical Skills">Technical Skills</option>
                    <option value="Communication Skills">Communication Skills</option>
                    <option value="Team Skills">Team Skills</option>
                </select>
            </label>
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

            </form>
            </div>
        )
    }
    
}




