import React, {useEffect, useRef} from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import styleTitle from '../common/Title/Title.module.scss'
import Title from "../common/Title/Title";
import JavaScript from "../assets/image/JavaScript-logo.png";
import Typescript from "../assets/image/typescript.svg";
import Html from "../assets/image/html.png";
import Css from "../assets/image/css.png";
import ReactLogo from "../assets/image/react.png";
import Redux from "../assets/image/redux.jpg";


type PropsType = {
    skillsRef: any
}


function Skills(props: PropsType) {
    const createObject = (obj: any) => {
        return {
            color: 'blue',
            backgroundImage: 'url(' + obj + ')',
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
    }

    const js = createObject(JavaScript)
    const typescript = createObject(Typescript)
    const html = createObject(Html)
    const css = createObject(Css)
    const react = createObject(ReactLogo)
    const redux = createObject(Redux)
    return (
        <div className={style.skillsBlock} ref={props.skillsRef}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={styleTitle.moduleHeader}>
                    <Title title={'Skills'}/>
                </div>
                <div className={style.skills}>
                    <Skill title={'Javascript'}
                           description={'lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla'}
                           style={js}/>
                    <Skill title={'Typescript'}
                           description={'lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla'}
                           style={typescript}/>
                    <Skill title={'HTML'}
                           description={'lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla'}
                           style={html}/>
                    <Skill title={'CSS'}
                           description={'lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla'}
                           style={css}/>
                    <Skill title={'REACT'}
                           description={'lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla'}
                           style={react}/>
                    <Skill title={'REDUX'}
                           description={'lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla'}
                           style={redux}/>
                </div>
            </div>
        </div>

    )
}

export default Skills