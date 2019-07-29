import React from 'react'
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

const PorjectList =({projects})=> {
    return (
        <div className="project-list section">
            {projects && projects.map(
                project =>{
                    return(
                        <Link key={project.id} to = {'/project/'+project.id}>
                            <ProjectSummary project={project}></ProjectSummary>
                        </Link>
                    )
                }
            )}
        </div>
    )
}

export default PorjectList;