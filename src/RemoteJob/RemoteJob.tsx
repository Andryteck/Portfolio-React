import React from 'react';
import style from './RemoteJob.module.css'
import styleContainer from '../common/styles/Container.module.css'
import styleTitle from '../common/styles/Title.module.css'
import Button from "../common/Button/Button";

function RemoteJob() {
    return (
    <div className={style.remoteJob}>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
            <div className={styleTitle.moduleHeader}>
                <h2 className={styleTitle.title}>consider options for remote work</h2>
            </div>
        <Button title={'Hire me'}/>
        </div>
    </div>
    )
}

export default RemoteJob