import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import FooterInst from "../assets/image/87390.png";
import FooterTwit from "../assets/image/twitter.png";
import FooterFace from "../assets/image/21155.png";
import FooterVk from "../assets/image/vk.png";
import FooterTelegram from "../assets/image/telegram.png";
import FooterGit from "../assets/image/git.svg";

type PropsType = {
    contactsRef: any
}


function Footer(props: PropsType) {
    let footerSocialNetworksTelegram = {
        color: 'blue',
        backgroundImage: 'url(' + FooterTelegram + ')'
    }
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
    let footerSocialNetworksGithub = {
        color: 'blue',
        backgroundImage: 'url(' + FooterGit + ')'
    }

    return (
        <div className={style.footer} ref={props.contactsRef}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Andrei</h3>
                <div className={style.socialNetworks}>
                    <a href={'https://t.me/Andrew_kulik2'} className={style.socialNetwork}
                       style={footerSocialNetworksTelegram}></a>
                    <a href={'https://github.com/Andryteck'} className={style.socialNetwork}
                       style={footerSocialNetworksGithub}></a>
                    <a href={'https://www.instagram.com/andrew_kulik/'} className={style.socialNetwork}
                       style={footerSocialNetworksInstagram}></a>
                    <a href={'https://vk.com/andrew_22'} className={style.socialNetwork}
                       style={footerSocialNetworksVk}></a>
                    <a href={'./#'} className={style.socialNetwork} style={footerSocialNetworksTwitter}></a>
                    <a href={'./#'} className={style.socialNetwork} style={footerSocialNetworksFacebook}></a>

                </div>
                <span className={style.copyright}>© 2020, All Rights Reserved.</span>
            </div>
        </div>
    )
}

export default Footer