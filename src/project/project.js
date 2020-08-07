import React, { Component, useState } from 'react';
import TechList from '../techlist/techlist';
import { Link} from 'react-router-dom'


// class Project extends Component {
const Project = ({data, onRemove})=> {
  // constructor(props) {
  //   super(props)

  //     this.state = {
  //       data: this.props.data,
  //       Name: this.props.data.Name,
  //       Technologies: this.props.data.Technologies
  //     };
  //   this.Technologies= this.props.data.Technologies
  // }
  // render() {
    let [project, setProjectData] = useState({
        data: data,
        Name: data.Name,
        Technologies: data.Technologies
      }); 
    return (
        <li>
            <div className="project-name">{project.Name}</div>
            <TechList data={project.Technologies} />
              <div className="item-actions">
                <ul>
                  <li><Link to={"/editproject/" + project.data.id}>Edit</Link></li>
                  <li onClick={() => onRemove() }>Remove</li>
                </ul>
              </div>
            <hr className="clear" />
        </li>
    );
  // }
}

export default Project;