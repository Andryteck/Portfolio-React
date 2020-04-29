import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import styleTitle from '../common/styles/Title.module.css'
import Project from "./Project/Project";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={styleTitle.title}>Projects</h2>
                <div className={style.projects}>
                <Project title={'Project'} description={'lorem ipsum bla bla bal'}/>
                <Project title={'Project'} description={'lorem ipsum bla bla bal'}/>
                <Project title={'Project'} description={'lorem ipsum bla bla bal'}/>
                </div>
            </div>
        </div>
    )
}

export default Projects