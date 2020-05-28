import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import styleTitle from '../common/Title/Title.module.css'
import Project from "./Project/Project";
import Title from '../common/Title/Title';


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
               <div className={styleTitle.moduleHeader}>
                   <Title title={'Projects'}/>
               </div>
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