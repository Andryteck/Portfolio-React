import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from '../common/Title/Title';
import socialNetwork from '../assets/image/SocialNetworkProject.png';
import singolo from '../assets/image/singolo.jpg';
import Todolist from '../assets/image/Todolist.png';
import StamBy from '../assets/image/stamBy.png';
// @ts-ignore
import Fade from 'react-reveal/Fade';


type PropsType = {
    projectsRef: any
}


function Projects(props: PropsType) {
    const social = {
        color: 'blue',
        backgroundImage: 'url(' + socialNetwork + ')',
    };
    // const divStyle = {
    //     color: 'blue',
    //     backgroundImage: 'url(' + imgUrl + ')',
    // };
    const redirectToSocialNetwork = () => {

    }
    const redirectToTodolist = () => {

    }
    const state = [{
        title: 'Social Network', action: redirectToSocialNetwork,
        social: {
            backgroundImage: 'url(' + socialNetwork + ')'
        },
        description: 'REACT, REDUX, TYPESCRIPT, REDUX-FORM, AXIOS',
        link: "https://andryteck.github.io/react-way-of-samurai/#/react-way-of-samurai/login"
    }, {
        title: 'Todolist', action: redirectToTodolist,
        social: {
            backgroundImage: 'url(' + Todolist + ')'
        }, description: 'REACT, TYPESCRIPT, REDUX, MATERIAL UI, FORMIK, AXIOS',
        link: "https://andryteck.github.io/Todolist/"
    }, {
        title: 'Test task StamBy company',
        social: {
            backgroundImage: 'url(' + StamBy + ')'
        },
        description: 'REACT, REDUX, AXIOS, PIXEL PERFECT, ADAPTIVE',
        link: "https://andryteck.github.io/TestByStamBy/"
    }, {
        title: 'SINGOLO', action: redirectToTodolist,
        social: {
            backgroundImage: 'url(' + singolo + ')'
        },
        description: 'HTML, CSS, NATIVE JS, SASS',
        link: "https://singolo-kulik.netlify.app/"
    },

    ]
    return (
        <div className={style.projectsBlock} ref={props.projectsRef}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Projects'}/>
                <Fade left>
                    <div className={style.projects}>
                        {
                            state.map(i => {
                                return <Project style={i.social} title={i.title} description={i.description}
                                                social={i.social} link={i.link}/>
                            })
                        }
                        {/*<Project style={social} title={'Social Network'} description={'lorem ipsum bla bla bal'}/>*/}
                        {/*<Project title={'Project'} description={'lorem ipsum bla bla bal'} style={social}/>*/}
                        {/*<Project title={'Project'} description={'lorem ipsum bla bla bal'}/>*/}
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Projects