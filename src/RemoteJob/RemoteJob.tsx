import React from 'react';
import style from './RemoteJob.module.css'
import styleContainer from '../common/styles/Container.module.css'
import styleTitle from '../common/Title/Title.module.scss'
import ProjectButton from "../common/Buttons/ProjectButton";
import Title from "../common/Title/Title";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import RegularButton from "../common/Buttons/RegularButton";

function RemoteJob() {
    return (
    <div className={style.remoteJob}>
        <Fade top>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
            <div className={styleTitle.moduleHeader}>
                <Title title={'I am available for Freelance'}/>
            </div>
            <a href="https://t.me/Andrew_kulik2"><RegularButton title={'Hire me'}/></a>
        </div>
        </Fade>
    </div>
    )
}

export default RemoteJob