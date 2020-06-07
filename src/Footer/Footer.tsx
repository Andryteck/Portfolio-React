import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import styleTitle from '../common/Title/Title.module.scss'
import FooterInst from "../assets/image/87390.png";
import FooterTwit from "../assets/image/twitter.png";
import FooterFace from "../assets/image/21155.png";
import FooterVk from "../assets/image/vk.png";


function Footer() {
    let footerSocialNetworksInstagram = {
        color: 'blue',
        backgroundImage: 'url(' + FooterInst + ')'
    }
    let footerSocialNetworksTwitter = {
        color: 'blue',
        backgroundImage: 'url(' + FooterTwit + ')'
    }
    let footerSocialNetworksFacebook = {
        color: 'blue',
        backgroundImage: 'url(' + FooterFace + ')'
    }
    let footerSocialNetworksVk = {
        color: 'blue',
        backgroundImage: 'url(' + FooterVk + ')'
    }
    return (
        <div className={style.footer}>
         <div className={`${styleContainer.container} ${style.footerContainer}`}>
          <h3 className={style.title}>Andrei</h3>
             <div className={style.socialNetworks}>
                 <div className={style.socialNetwork} style={footerSocialNetworksInstagram}></div>
                 <div className={style.socialNetwork} style={footerSocialNetworksVk}></div>
                 <div className={style.socialNetwork} style={footerSocialNetworksTwitter}></div>
                 <div className={style.socialNetwork} style={footerSocialNetworksFacebook}></div>
             </div>
             <span className={style.copyright}>© 2020 beingeorge, All Rights Reserved.</span>
         </div>
        </div>
    )
}

export default Footer