import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import styleTitle from '../common/Title/Title.module.scss'
import Project from "./Project/Project";
import Title from '../common/Title/Title';
import socialNetwork from '../assets/image/SocialNetworkProject.png';
import {Redirect} from 'react-router-dom';

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
        console.log('by')
    }
    const state = [{
        title: 'Social Network', action: redirectToSocialNetwork,
        social: {
            color: 'blue',
            backgroundImage: 'url(' + socialNetwork + ')'
        },
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        link: "https://andryteck.github.io/react-way-of-samurai"
    }, {
        title: 'Todolist', action: redirectToTodolist,
        social: {
            color: 'blue',
            backgroundImage: 'url(' + socialNetwork + ')'
        }, description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        link: "https://andryteck.github.io/react-way-of-samurai"
    }, {
        title: 'New', action: redirectToTodolist,
        social: {
            color: 'blue',
            backgroundImage: 'url(' + socialNetwork + ')'
        },
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        link: "https://andryteck.github.io/react-way-of-samurai"
    }
    ]
    return (
        <div className={style.projectsBlock} ref={props.projectsRef}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Projects'}/>
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
            </div>
        </div>
    )
}

export default Projects