import React, {useEffect, useRef} from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import styleTitle from '../common/Title/Title.module.scss'
import Title from "../common/Title/Title";
import ProjectImg from "../assets/image/ProjectImg.png";


type PropsType = {
    skillsRef: any
}



function Skills(props: PropsType) {

    const tech = {
        color: 'blue',
        backgroundImage: 'url(' + ProjectImg + ')',
        width: '45px',
        height: '45px',
        transform: 'rotate(-45deg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        top: '18px',
        left: '17px'
    }
    return (
        <div className={style.skillsBlock} ref={props.skillsRef}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={styleTitle.moduleHeader}>
                    <Title title={'Skills'}/>
                </div>
                <div className={style.skills}>
                    <Skill title={'Javascript'}
                           description={'lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla'}
                           style={tech}/>
                    <Skill title={'Typescript'}
                           description={'lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla'}
                           style={tech}/>
                    <Skill title={'HTML'}
                           description={'lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla'}
                           style={tech}/>
                    <Skill title={'CSS'}
                           description={'lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla'}
                           style={tech}/>
                </div>
            </div>
        </div>

    )
}

export default Skills