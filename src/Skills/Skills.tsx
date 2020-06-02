import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import styleTitle from '../common/Title/Title.module.scss'
import Title from "../common/Title/Title";
import ProjectImg from "../assets/image/ProjectImg.png";



function Skills() {
    const tech = {
        color: 'blue',
        backgroundImage: 'url(' + ProjectImg + ')',
    };
 return (
     <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
         <div className={styleTitle.moduleHeader}>
             <Title title={'Skills'}/>
         </div>
          <div className={style.skills}>
              <Skill title={'Javascript'} description={'lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla'} style={tech}/>
              <Skill title={'Typescript'}  description={'lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla'} style={tech}/>
              <Skill title={'HTML'}  description={'lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla'} style={tech}/>
              <Skill title={'CSS'}  description={'lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla'} style={tech}/>
              </div>
          </div>
      </div>

 )
}

export default Skills