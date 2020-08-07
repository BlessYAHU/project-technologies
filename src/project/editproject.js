
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
/// A type of Import
const EditProject = ({match})=>{
    let [projectData, setProjectData] = useState({
        ProjectName: '',
        Technologies: ''
      });

    const lists= useSelector((state) => {
          return {
            projectNames: (()=> state.projectNames)(),
            projects: (()=> state.projects)()
          }
        });

    let TargetProject =  lists.projects.find(item=>item.id == match.params.id);
    const dispatch = useDispatch();
    const onProjectUpdate =  (prj)=>dispatch({type: 'UPDATE_PROJECT', updatedProject: prj});

    const handleClick = (e)=> {
       onProjectUpdate({
          id:TargetProject.id,
          Name:projectData.ProjectName ,
          Technologies:projectData.Technologies.split(',')
        });
    }

     const handleSelectChange = (e) => {
       setProjectData(Object.assign({},projectData,{ ProjectName: e.target.value }));
    }

     const handleChange = (e) => {
       setProjectData(Object.assign({},projectData,{ Technologies: e.target.value }));
    }
// }
  
  // render() {
    var mapProjectsToOptions = lists.projectNames.map(x=> <option key={`${x.id}:${x.Name}`} value={x.Name} selected={ x.Name === TargetProject.Name}>{x.Name}</option>);
    return (
     <div className="add_edit_project">
        <ul>
          <li><label>Technologies</label><input type="text" onChange={handleChange } defaultValue={TargetProject.Technologies.join(',')}/></li>
          <li>
            <label>Project</label>
            <select onChange={ handleSelectChange }>
              <option value="none" defaultValue  >none</option>
              { mapProjectsToOptions }
            </select>
          </li>
          <li><input type="submit" onClick={ handleClick } /></li>
        </ul>
      </div> 
   );
  // }
}

export default EditProject;