import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import styleTitle from '../common/styles/Title.module.css'

type propsType = {
    title: string
}

function Skills() {
 return (
     <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
         <div className={styleTitle.moduleHeader}>
             <h2 className={styleTitle.title}>Skills</h2>
         </div>
          <div className={style.skills}>
              <Skill title={'Javascript'} description={'lorem ipsum bla blalorem ipsum bla bla'}/>
              <Skill title={'Typescript'}  description={'lorem ipsum bla bla'}/>
              <Skill title={'HTML'}  description={'lorem ipsum bla bla'}/>
              <Skill title={'CSS'}  description={'lorem ipsum bla bla'}/>
              </div>
          </div>
      </div>

 )
}

export default Skills