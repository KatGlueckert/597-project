import React from 'react';


const IndividualForm = () => (
    //const communication = 'COMMUNICATION - is able to effectively present information and elicit information from both clients and fellow teammates';
    const participation = 'PARTICIPATION - maintains a positive attitude, is prompt and focused during work session, is timely in the completion of tasks, is willing to help other team members';
    const analytical = 'ANALYTICAL - performs independent research, thinks innovatively, asks relevant questions, understands the project and its deliverables';
    const technical = 'TECHNICAL - understands the clilents tecnical environment and needs, understands and follows technical methodology steps, and is learning about new/existing technology required for the project';
    <div> 
    <p> Please enter your teammates name to review: </p>
    <input type = "text" name= "teammateOne" />
    <p>Examples for criteria for each skill includes: </p>
    <p> {technical} </p>
    <p> {analytical}</p>
    <p> {communication}</p>
    <p> {participation}</p>
    <p>Technical Skills:</p>
    <select>
    <option value = "tech-poor"> Poor</option>
    <option value = "tech-fair"> Fair</option>
    <option value = "tech-satisfactory"> Satisfactory</option>
    <option value = "tech-very good"> Very Good</option>
    <option value = "tech-excellent"> Excellent</option>
    </select>
    

    <p>Analytical Skills:</p>
    <select>
    <option value = "analit-poor"> Poor</option>
    <option value = "analit-fair"> Fair</option>
    <option value = "analit-satisfactory"> Satisfactory</option>
    <option value = "analit-very good"> Very Good</option>
    <option value = "analit-excellent"> Excellent</option>
    </select>

    <p>Communication Skills:</p>
    <select>
    <option value = "comm-poor"> Poor</option>
    <option value = "comm-fair"> Fair</option>
    <option value = "comm-satisfactory"> Satisfactory</option>
    <option value = "comm-very good"> Very Good</option>
    <option value = "comm-excellent"> Excellent</option>
    </select>

    <p>Participation:</p>
    <select>
    <option value = "part-poor"> Poor</option>
    <option value = "part-fair"> Fair</option>
    <option value = "part-satisfactory"> Satisfactory</option>
    <option value = "part-very good"> Very Good</option>
    <option value = "part-excellent"> Excellent</option>
    </select>
    


    <p> In the free responce sections, please provide as much detail as you see fit. If you do not have any input, please enter "n/a"</p>

    <p> What strengths does your teammate bring to your team?</p>
    <input type="text" name="teammate1-strengths" />

    <p> What areas for growth exist? </p>
    <input type="text" name="teammate1-growth" />

    <p> Additional comments</p>
    <input type="text" name="teammate1-comments" />


    </div>
   
        );

export default IndividualForm;