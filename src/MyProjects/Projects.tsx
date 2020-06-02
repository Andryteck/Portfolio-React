import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import styleTitle from '../common/Title/Title.module.scss'
import Project from "./Project/Project";
import Title from '../common/Title/Title';
import ProjectImg from '../assets/image/ProjectImg.png';


function Projects() {
    const social = {
        color: 'blue',
        backgroundImage: 'url(' + ProjectImg + ')',
    };
    // const divStyle = {
    //     color: 'blue',
    //     backgroundImage: 'url(' + imgUrl + ')',
    // };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project style={social} title={'Social Network'} description={'lorem ipsum bla bla bal'}/>
                    <Project title={'Project'} description={'lorem ipsum bla bla bal'} style={social}/>
                    <Project title={'Project'} description={'lorem ipsum bla bla bal'}/>
                </div>
            </div>
        </div>
    )
}

export default Projects