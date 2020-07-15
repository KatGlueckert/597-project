import React from 'react';



//or i could do it like the indecision appp and have it only do one at a time and to clear after every one, the only problem is I would have to have the all about me section first
export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        student: [
          {userName: 'no responce',
          crimsonEmail: 'no response',
          personalTechnical: 'poor',
          personalAnalytical: 'poor',
          personalCommunication: 'poor',
          personalParticipation: 'poor',
          personalStrengths: '',
          personalGrowth: '',
          personalComments: '',
          numberOfTeammates: 'one'}
        ],
        teammates: [
            {teammateOneName: '',
            tOneTechnical: 'poor',
            tOneAnalytical: 'poor',
            tOneCommunication: 'poor',
            tOneParticipation: 'poor',
            tOneStrengths: '',
            tOneGrowth: '',
            tOneComments: ''
        },
        {teammateTwoName: '',
            tTwoTechnical: 'poor',
            tTwoAnalytical: 'poor',
            tTwoCommunication: 'poor',
            tTwoParticipation: 'poor',
            tTwoStrengths: '',
            tTwoGrowth: '',
            tTwoComments: ''
        },
        {teammateThreeName: '',
            tThreeTechnical: 'poor',
            tThreeAnalytical: 'poor',
            tThreeCommunication: 'poor',
            tThreeParticipation: 'poor',
            tThreeStrengths: '',
            tThreeGrowth: '',
            tThreeComments: ''
        }
        ],
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.userNameChange = this.userNameChange.bind(this);
        this.crimsonEmailChange = this.crimsonEmailChange.bind(this);
        this.personalTechnicalChange = this.personalTechnicalChange.bind(this);
    }
    onSubmit = (e) => {
        e.preventDefault();
        
        console.log(this.state.student);
        console.log(this.state.teammateOneName);
        
    }
    userNameChange = (e) => {
        const userName = e.target.value;
        this.setState(() => ({userName}))
    }
    crimsonEmailChange = (e) => {
        const crimsonEmail = e.target.value;
        this.setState(() => ({crimsonEmail}))
    }
    personalTechnicalChange = (e) => {
        const personalTechnical = e.target.value;
        this.setState(() => ({personalTechnical}));
    }
    personalAnalyticalChange = (e) => {
        const personalAnalytical = e.target.value;
        this.setState(() => ({personalAnalytical}));
    }
    personalCommunicationChange = (e) => {
        const personalCommunication = e.target.value;
        this.setState(() => ({personalCommunication}));
    }
    personalParticipationChange = (e) => {
        const personalParticipation = e.target.value;
        this.setState(() => ({personalParticipation}));
    }
    personalStrengthsChange = (e) => {
        const personalStrengths = e.target.value;
        this.setState(() => ({personalStrengths}));
    }
    personalGrowthsChange = (e) => {
        const personalGrowths = e.target.value;
        this.setState(() => ({personalGrowths}));
    }
    personalCommentsChange = (e) => {
        const personalComments = e.target.value;
        this.setState(() => ({personalComments}));
    }
    numberOfTeammatesChange = (e) => {
        const numberOfTeammates = e.target.value;
        this.setState(() => ({numberOfTeammates}));
        if(this.state.numberOfTeammates === 'one'){
            // not workng. Need to get this to print another form
            
        }  
    }   
    teammateOneNameChange = (e) => {
        const teammateOneName = e.target.value;
        this.setState(() => ({teammateOneName}));
    }
    tOneAnalyticalChange = (e) => {
        const tOneAnalytical = e.target.value;
        this.setState(() => ({tOneAnalytical}));
    }
    tOneTechnicalChange = (e) => {
        const tOneTechnical = e.target.value;
        this.setState(() => ({tOneTechnical}));
    }
    tOneCommunicationChange = (e) => {
        const tOneCommunication = e.target.value;
        this.setState(() => ({tOneCommunication}));
    }
    tOneParticipationChange = (e) => {
        const tOneParticipation = e.target.value;
        this.setState(() => ({tOneParticipation}));
    }
    tOneStrengths = (e) => {
        const tOneStrengths = e.target.value;
        this.setState(() => ({tOneStrengths}));
    }   
    tOneGrowth = (e) => {
        const tOneGrowth = e.target.value;
        this.setState(() => ({tOneGrowth}));
    }
    tOneComments = (e) => {
        const tOneCommenbts = e.target.value;
        this.setState(() => ({tOneComments}));
    }
    teammateTwoNameChange = (e) => {
        const teammateTwoName = e.target.value;
        this.setState(() => ({teammateTwoName}));
    }
    tTwoAnalyticalChange = (e) => {
        const tTwoAnalytical = e.target.value;
        this.setState(() => ({tTwoAnalytical}));
    }
    tTwoTechnicalChange = (e) => {
        const tTwoTechnical = e.target.value;
        this.setState(() => ({tTwoTechnical}));
    }
    tTwoCommunicationChange = (e) => {
        const tTwoCommunication = e.target.value;
        this.setState(() => ({tTwoCommunication}));
    }
    tTwoParticipationChange = (e) => {
        const tTwoParticipation = e.target.value;
        this.setState(() => ({tTwoParticipation}));
    }
    tTwoStrengths = (e) => {
        const tTwoStrengths = e.target.value;
        this.setState(() => ({tTwoStrengths}));
    }   
    tTwoGrowth = (e) => {
        const tTwoGrowth = e.target.value;
        this.setState(() => ({tTwoGrowth}));
    }
    tTwoComments = (e) => {
        const tTwoCommenbts = e.target.value;
        this.setState(() => ({tTwoComments}));
    }
    teammateThreeNameChange = (e) => {
        const teammateThreeName = e.target.value;
        this.setState(() => ({teammateThreeName}));
    }
    tThreeAnalyticalChange = (e) => {
        const tThreeAnalytical = e.target.value;
        this.setState(() => ({tThreeAnalytical}));
    }
    tThreeTechnicalChange = (e) => {
        const tThreeTechnical = e.target.value;
        this.setState(() => ({tThreeTechnical}));
    }
    tThreeCommunicationChange = (e) => {
        const tThreeCommunication = e.target.value;
        this.setState(() => ({tThreeCommunication}));
    }
    tThreeParticipationChange = (e) => {
        const tThreeParticipation = e.target.value;
        this.setState(() => ({tThreeParticipation}));
    }
    tThreeStrengths = (e) => {
        const tThreeStrengths = e.target.value;
        this.setState(() => ({tThreeStrengths}));
    }   
    tThreeGrowth = (e) => {
        const tThreeGrowth = e.target.value;
        this.setState(() => ({tThreeGrowth}));
    }
    tThreeComments = (e) => {
        const tThreeCommenbts = e.target.value;
        this.setState(() => ({tThreeComments}));
    }



        render() {
        const communication = 'COMMUNICATION - is able to effectively present information and elicit information from both clients and fellow teammates';
        const participation = 'PARTICIPATION - maintains a positive attitude, is prompt and focused during work session, is timely in the completion of tasks, is willing to help other team members';
        const analytical = 'ANALYTICAL - performs independent research, thinks innovatively, asks relevant questions, understands the project and its deliverables';
        const technical = 'TECHNICAL - understands the clilents tecnical environment and needs, understands and follows technical methodology steps, and is learning about new/existing technology required for the project';
        return (
            <form onSubmit = {this.onSubmit}>
            <p> Please fill out the following 360 Evaluation Form assessing the project contributions, areas for growth, and strengths for you and your teammates. This form is due no later than xxx</p>
            
            <p>Name:</p> 
            <input 
                type="text" 
                name = "username"
                placeholder = "userName"
                value = {this.state.student.userName} 
                onChange = {this.userNameChange}/>
           
            <p>Crimson Email:</p>
            <input 
                type="text" 
                name="crimsonemail"
                placeholder = "crimsonEmail"
                value = {this.state.crimsonEmail}
                onChange = {this.crimsonEmailChange} />
            
            <p>Please review your performance:</p>
            <p> Examples of criteria for each skill includes:</p>
            <p> {technical} </p>
            <p> {analytical}</p>
            <p> {communication}</p>
            <p> {participation}</p>
            <p>Technical Skills:</p>
            <select
                value={this.state.personalTechnical}
                onChange ={this.personalTechnicalChange}
                >
            <option value = "tech-poor"> Poor</option>
            <option value = "tech-fair"> Fair</option>
            <option value = "tech-satisfactory"> Satisfactory</option>
            <option value = "tech-very good"> Very Good</option>
            <option value = "tech-excellent"> Excellent</option>
            </select>
            

            <p>Analytical Skills:</p>
            <select
                value = {this.state.personalAnalytical}
                onChange = {this.personalAnalyticalChange}
                >
            <option value = "analit-poor"> Poor</option>
            <option value = "analit-fair"> Fair</option>
            <option value = "analit-satisfactory"> Satisfactory</option>
            <option value = "analit-very good"> Very Good</option>
            <option value = "analit-excellent"> Excellent</option>
            </select>

            <p>Communication Skills:</p>
            <select
                value = {this.state.personalCommunication}
                onChange = {this.personalCommunicationChange}
                >
            <option value = "comm-poor"> Poor</option>
            <option value = "comm-fair"> Fair</option>
            <option value = "comm-satisfactory"> Satisfactory</option>
            <option value = "comm-very good"> Very Good</option>
            <option value = "comm-excellent"> Excellent</option>
            </select>

            <p>Participation:</p>
            <select
                value = {this.state.personalParticipation}
                onChange = {this.personalParticipationChange}>
            <option value = "part-poor"> Poor</option>
            <option value = "part-fair"> Fair</option>
            <option value = "part-satisfactory"> Satisfactory</option>
            <option value = "part-very good"> Very Good</option>
            <option value = "part-excellent"> Excellent</option>
            </select>
            

            <p> In the free responce sections, please provide as much detail as you see fit. If you do not have any input, please enter "n/a"</p>

            <p> What strengths do you bring to your team?</p>
            <input 
                type="text" 
                name="personal-strengths"
                value = {this.state.personalStrengths}
                onChange = {this.personalStrengthsChange} 
                />

            <p> What areas for growth exist? </p>
            <input 
                type="text" 
                name="personal-growth"
                value = {this.state.personalGrowths}
                onChange = {this.personalGrowthsChange} />

            <p> Additional comments</p>
            <input 
                type="text" 
                name="personal-comments"
                value = {this.state.personalComments}
                onChange = {this.personalCommentsChange} />

            <p> Please tell us how many teammates you have to reveiw </p>
            <select 
                value = {this.state.numberOfTeammates}
                onChange = {this.numberOfTeammatesChange}>
            <option value = "one" > One </option>
            <option value = "two"> Two</option>
            <option value = "three"> Three</option>
            <option value = "four"> Four</option>
            <option value = "five"> Five</option>
            </select>

//TEAMMATE ONE 
           <div> 
           <p> Please enter your teammates name to review: </p>
           <input 
                type = "text" 
                name= "teammateOne"
                value = {this.state.teammateOneName}
                onChange = {this.teammateOneNameChange} />
           <p>Examples for criteria for each skill includes: </p>
           <p> {technical} </p>
           <p> {analytical}</p>
           <p> {communication}</p>
           <p> {participation}</p>
           <p>Technical Skills:</p>
           <select
                value = {this.state.tOneTechnical}
                onChange = {this.tOneTechnicalChange}>
           <option value = "tech-poor"> Poor</option>
           <option value = "tech-fair"> Fair</option>
           <option value = "tech-satisfactory"> Satisfactory</option>
           <option value = "tech-very good"> Very Good</option>
           <option value = "tech-excellent"> Excellent</option>
           </select>
           
       
           <p>Analytical Skills:</p>
           <select
                value = {this.state.tOneAnalytical}
                onChange = {this.tOneAnalyticalChange}>
           <option value = "analit-poor"> Poor</option>
           <option value = "analit-fair"> Fair</option>
           <option value = "analit-satisfactory"> Satisfactory</option>
           <option value = "analit-very good"> Very Good</option>
           <option value = "analit-excellent"> Excellent</option>
           </select>
       
           <p>Communication Skills:</p>
           <select
                value = {this.state.tOneCommunication}
                onChange = {this.tOneCommunicationChange}>
           <option value = "comm-poor"> Poor</option>
           <option value = "comm-fair"> Fair</option>
           <option value = "comm-satisfactory"> Satisfactory</option>
           <option value = "comm-very good"> Very Good</option>
           <option value = "comm-excellent"> Excellent</option>
           </select>
       
           <p>Participation:</p>
           <select
                value = {this.state.tOneParticipation}
                onChange = {this.tOneParticipationChange}>
           <option value = "part-poor"> Poor</option>
           <option value = "part-fair"> Fair</option>
           <option value = "part-satisfactory"> Satisfactory</option>
           <option value = "part-very good"> Very Good</option>
           <option value = "part-excellent"> Excellent</option>
           </select>
           
       
       
           <p> In the free responce sections, please provide as much detail as you see fit. If you do not have any input, please enter "n/a"</p>
       
           <p> What strengths does your teammate bring to your team?</p>
           <input 
                type="text" 
                name="teammate1-strengths"
                value = {this.state.tOneStrengths}
                onChange = {this.tOneStrengths} />
       
           <p> What areas for growth exist? </p>
           <input 
                type="text" 
                name="teammate1-growth"
                value = {this.state.tOneGrowth}
                onChange = {this.tOneGrowth} />
       
           <p> Additional comments</p>
           <input 
                type="text" 
                name="teammate1-comments"
                value = {this.state.tOneComments}
                onChange = {this.tOneComments} />
       
       
           </div>

//TEAMMATE TWO
    <div> 

    <p> Please enter your teammates name to review: </p>
    <input 
        type = "text" 
        name= "teammateTwo"
        value = {this.state.teammateTwoName}
        onChange = {this.teammateTwoNameChange} />
    <p>Examples for criteria for each skill includes: </p>
    <p> {technical} </p>
    <p> {analytical}</p>
    <p> {communication}</p>
    <p> {participation}</p>
    <p>Technical Skills:</p>
    <select
        value = {this.state.tTwoTechnical}
        onChange = {this.tTwoTechnicalChange}>
    <option value = "tech-poor"> Poor</option>
    <option value = "tech-fair"> Fair</option>
    <option value = "tech-satisfactory"> Satisfactory</option>
    <option value = "tech-very good"> Very Good</option>
    <option value = "tech-excellent"> Excellent</option>
    </select>
    

    <p>Analytical Skills:</p>
    <select
        value = {this.state.tTwoAnalytical}
        onChange = {this.tTwoAnalyticalChange}>
    <option value = "analit-poor"> Poor</option>
    <option value = "analit-fair"> Fair</option>
    <option value = "analit-satisfactory"> Satisfactory</option>
    <option value = "analit-very good"> Very Good</option>
    <option value = "analit-excellent"> Excellent</option>
    </select>

    <p>Communication Skills:</p>
    <select
        value = {this.state.tTwoCommunication}
        onChange = {this.tTwoCommunicationChange}>
    <option value = "comm-poor"> Poor</option>
    <option value = "comm-fair"> Fair</option>
    <option value = "comm-satisfactory"> Satisfactory</option>
    <option value = "comm-very good"> Very Good</option>
    <option value = "comm-excellent"> Excellent</option>
    </select>

    <p>Participation:</p>
    <select
        value = {this.state.tTwoParticipation}
        onChange = {this.tTwoParticipationChange}>
    <option value = "part-poor"> Poor</option>
    <option value = "part-fair"> Fair</option>
    <option value = "part-satisfactory"> Satisfactory</option>
    <option value = "part-very good"> Very Good</option>
    <option value = "part-excellent"> Excellent</option>
    </select>
    


    <p> In the free responce sections, please provide as much detail as you see fit. If you do not have any input, please enter "n/a"</p>

    <p> What strengths does your teammate bring to your team?</p>
    <input 
        type="text" 
        name="teammate2-strengths" 
        value = {this.state.tTwoStrengths}
        onChange = {this.tTwoStrengths}/>

    <p> What areas for growth exist? </p>
    <input 
        type="text" 
        name="teammate2-growth"
        value = {this.state.tTwoGrowth}
        onChange = {this.tTwoGrowth} />

    <p> Additional comments</p>
    <input 
        type="text" 
        name="teammate2-comments"
        value = {this.state.tTwoComments}
        onChange = {this.tTwoComments} />


    </div>

//TEAMMATE THREE

<div> 
    <p> Please enter your teammates name to review: </p>
    <input 
        type = "text" 
        name= "teammateThree"
        value = {this.state.teammateThreeName}
        onChange = {this.teammateThreeNameChange} />
    <p>Examples for criteria for each skill includes: </p>
    <p> {technical} </p>
    <p> {analytical}</p>
    <p> {communication}</p>
    <p> {participation}</p>
    <p>Technical Skills:</p>
    <select
        value = {this.state.tThreeTechnical}
        onChange = {this.tThreeTechnicalChange}>
    <option value = "tech-poor"> Poor</option>
    <option value = "tech-fair"> Fair</option>
    <option value = "tech-satisfactory"> Satisfactory</option>
    <option value = "tech-very good"> Very Good</option>
    <option value = "tech-excellent"> Excellent</option>
    </select>
    

    <p>Analytical Skills:</p>
    <select
        value = {this.state.tThreeAnalytical}
        onChange = {this.tThreeAnalyticalChange}>
    <option value = "analit-poor"> Poor</option>
    <option value = "analit-fair"> Fair</option>
    <option value = "analit-satisfactory"> Satisfactory</option>
    <option value = "analit-very good"> Very Good</option>
    <option value = "analit-excellent"> Excellent</option>
    </select>

    <p>Communication Skills:</p>
    <select
        value = {this.state.tThreeCommunication}
        onChange = {this.tThreeCommunicationChange}>
    <option value = "comm-poor"> Poor</option>
    <option value = "comm-fair"> Fair</option>
    <option value = "comm-satisfactory"> Satisfactory</option>
    <option value = "comm-very good"> Very Good</option>
    <option value = "comm-excellent"> Excellent</option>
    </select>

    <p>Participation:</p>
    <select
        value = {this.state.tThreeParticipation}
        onChange = {this.tThreeParticipationChange}>
    <option value = "part-poor"> Poor</option>
    <option value = "part-fair"> Fair</option>
    <option value = "part-satisfactory"> Satisfactory</option>
    <option value = "part-very good"> Very Good</option>
    <option value = "part-excellent"> Excellent</option>
    </select>
    


    <p> In the free responce sections, please provide as much detail as you see fit. If you do not have any input, please enter "n/a"</p>

    <p> What strengths does your teammate bring to your team?</p>
    <input 
        type="text" 
        name="teammate3-strengths"
        value = {this.state.tThreeStrengths}
        onChange = {this.tThreeStrengths} />

    <p> What areas for growth exist? </p>
    <input 
        type="text" 
        name="teammate3-growth"
        value = {this.state.tThreeGrowth}
        onChange = {this.tThreeGrowth} />

    <p> Additional comments</p>
    <input 
        type="text" 
        name="teammate3-comments"
        value = {this.state.tThreeComments}
        onChange = {this.tThreeComments} />


    </div>
   
   
          
            

            <input type = "submit" value= "submit" />
            
            </form>
        );
    }
}
