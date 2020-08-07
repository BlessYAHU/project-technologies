
import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { useSelector } from 'react-redux'
/// A type of Import
class EditProject extends Component {
//   let EditProject = ({projects, onProjectUpdate, match, projectNames}) => {
//   let br =   (state) => {
//       return {
//         projectNames: getProjectsList(state.projectNames),
//         projects: (()=> state.projects)()
//       }
//     }
//     const [ProjectName, setProjectName] = useState('');
//     const [Technologies, setTechnologies] = useState([]);
 constructor(props) {
    super(props)
      console.log(props)
      this.state = {
        ProjectName: '',
        Technologies: '',
      };

      this.TargetProject =  props.projects.find(item=>item.id == props.match.params.id)


     this.handleClick = (e)=> {
       this.props.onProjectUpdate({
          id:this.TargetProject.id,
          Name:this.state.ProjectName ,
          Technologies:this.state.Technologies.split(',')
        });
    }

     this.handleSelectChange = (e) => {
      this.setState({ ProjectName: e.target.value });
    }

     this.handleChange = (e) => {
      this.setState({ Technologies: e.target.value });
    }
 }


  
  render() {
    var mapProjectsToOptions = this.props.projectNames.map(x=> <option key={`${x.id}:${x.Name}`} value={x.Name} selected={ x.Name === this.TargetProject.Name}>{x.Name}</option>)
    return (
     <div className="add_edit_project">
        <ul>
          <li><label>Technologies</label><input type="text" onChange={ this.handleChange } defaultValue={this.TargetProject.Technologies.join(',')}/></li>
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
  }
}


const getProjectsList = (projectNames)=> {
  return projectNames;
}

const mapStateToProps = (state) => {
  return {
    projectNames: getProjectsList(state.projectNames),
    projects: (()=> state.projects)()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onProjectUpdate: prj=>dispatch({type: 'UPDATE_PROJECT', updatedProject: prj})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditProject)