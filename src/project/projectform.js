import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
/// A type of Import
const ProjectForm = ()=> {
// class ProjectForm extends Component {
  let [projectData, setProjectData] = useState({
        ProjectName: '',
        Technologies: '',
        CurrentProjectTechnologies: ''
      });

  const projectList = useSelector((state) => {
    return {
      projects:  (projects)=> {
        return projects;
      }
    }
  });

  const dispatch = useDispatch();
  const onProjectAdd = (prj)=>dispatch({type: 'ADD_PROJECT', newProject: prj});

  // constructor(props) {
  //   super(props)

  //     this.state = {
  //       ProjectName: '',
  //       Technologies: '',
  //       CurrentProjectTechnologies: ''
  //     };

    const handleClick = ((e)=> {
      console.log('add from state %o',this.state);
      onProjectAdd({
          id:21,
          Name:projectData.ProjectName ,
          Technologies:projectData.CurrentProjectTechnologies.split(',')
        });
    });//.bind(this)

    const handleSelectChange = ((e) => {
      let currentProject = projectList.props.projects.find(project=> project.id == e.target.value)
      setProjectData(Object.assign({},projectData,{ CurrentProjectTechnologies: currentProject ? currentProject.Technologies.join(',') : '', ProjectName: currentProject.Name }))
      // this.setState({ CurrentProjectTechnologies: currentProject ? currentProject.Technologies.join(',') : ''})
      // this.setState({ ProjectName: currentProject.Name });
    });//.bind(this)

    const handleChange = ((e) => {
      setProjectData(Object.assign({},projectData,{ CurrentProjectTechnologies: e.target.value }));
    });//.bind(this)
  //}


  // render() {
    console.log(projectList.projects)
    // var mapProjectsToOptions = this.props.projects.map(x=> <option key={`${x.id}:${x.Name}`} value={x.Name}>{x.Name}</option>)
    let mapProjectsToOptions = projectList.projects.map(x=> <option key={`${x.id}:${x.Name}`} value={x.id}>{x.Name}</option>)
    return (
     <div className="add_edit_project">
        <ul>
          <li><label>Technologies</label><input type="text" onChange={ this.handleChange } value={projectData.CurrentProjectTechnologies} /></li>
          <li>
            <label>Project</label>
            <select onChange={ this.handleSelectChange }>
              <option value="none" defaultValue  >none</option>
              { mapProjectsToOptions }
            </select>
          </li>
          <li><input type="submit" onClick={ this.handleClick } /></li>
        </ul>
      </div> 
   );
  // }
}


// const getProjectsList = (projects)=> {
//   return projects;
// }

// const mapStateToProps = (state) => {
//   return {
//     projects: getProjectsList(state.projects)

//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onProjectAdd: prj=>dispatch({type: 'ADD_PROJECT', newProject: prj})
//   }
// }
export default ProjectForm;
// export default connect(mapStateToProps,mapDispatchToProps)(ProjectForm)