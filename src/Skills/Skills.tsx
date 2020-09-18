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
import Nodejs from "../assets/image/nodejs.png";
import GraphQL from "../assets/image/GraphQL.png";
// @ts-ignore
import Fade from 'react-reveal/Fade';

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
            backgroundRepeat: 'noRepeat',
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
    const nodejs = createObject(Nodejs)
    const graphql = createObject(GraphQL)
    return (
        <div className={style.skillsBlock} ref={props.skillsRef}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={styleTitle.moduleHeader}>
                    <Title title={'Skills'}/>
                </div>
                <Fade right>
                <div className={style.skills}>
                    <Skill title={'Javascript'}
                           description={'I made 2 projects on native JS. I can talk about Promises, Event loop, Closures, Pure function and other'}
                           style={js}/>
                    <Skill title={'Typescript'}
                           description={'I made 4 projects. I can talk about Types, Generics, Enums and other'}
                           style={typescript}/>
                    <Skill title={'HTML'}
                           description={'I made a lot of projects. I can talk about Semantics, Blocks and Inline elements, Entities and other'}
                           style={html}/>
                    <Skill title={'CSS'}
                           description={'I made a lot of projects. I can talk about Flex, Grid, Adaptive mark-up and other'}
                           style={css}/>
                    <Skill title={'REACT'}
                           description={'I made 5 projects. I can talk about Components Life Circle, Hooks, Pure Component, Props and other'}
                           style={react}/>
                    <Skill title={'REDUX'}
                           description={'I made 4 projects. I can talk about Reducer, Thunk, Saga, Action, Store and other'}
                           style={redux}/>
                    <Skill title={'NODE.JS'}
                           description={'I made 4 projects. I can talk about Event Loop,I/O operations,“non-blocking” and other'}
                           style={nodejs}/>
                    <Skill title={'GRAPHQL'}
                           description={'I made 2 projects. I can talk about GraphQL schema, Server-side Caching, AST in GraphQL and other'}
                           style={graphql}/>
                </div>
                </Fade>
            </div>
        </div>

    )
}

export default Skills