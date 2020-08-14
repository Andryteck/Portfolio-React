import React from 'react';
import style from './RemoteJob.module.css'
import styleContainer from '../common/styles/Container.module.css'
import styleTitle from '../common/Title/Title.module.scss'
import Button from "../common/Button/Button";
import Title from "../common/Title/Title";

function RemoteJob() {
    return (
    <div className={style.remoteJob}>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
            <div className={styleTitle.moduleHeader}>
                <Title title={'I am available for Freelance'}/>
            </div>
            <a href="https://t.me/Andrew_kulik2"><Button title={'Hire me'}/></a>
        </div>
    </div>
    )
}

export default RemoteJob