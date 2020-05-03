import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import styleTitle from '../common/styles/Title.module.css'


function Footer() {
    return (
        <div className={style.footer}>
         <div className={`${styleContainer.container} ${style.footerContainer}`}>
          <h2 className={styleTitle.title}>Andrei</h2>
             <div className={style.socialNetworks}>
                 <div className={style.socialNetwork}></div>
                 <div className={style.socialNetwork}></div>
                 <div className={style.socialNetwork}></div>
                 <div className={style.socialNetwork}></div>
             </div>
             <span>© 2012 beingeorge, All Rights Reserved.</span>
         </div>
        </div>
    )
}

export default Footer