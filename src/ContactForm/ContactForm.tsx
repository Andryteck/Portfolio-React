import React, {useState} from 'react';
import style from './ContactForm.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/Title/Title";
import {contactFormAPI} from "../api/Contactform";
import RegularButton from "../common/Buttons/RegularButton";
// @ts-ignore
import Fade from 'react-reveal/Fade';

class ContactForm extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            login: null,
            password: null,
            email: null
        }
    }


    onChange(e: any) {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    onSubmit(e: any) {
        e.preventDefault();
        // @ts-ignore
        let name = this.state.name;
        // @ts-ignore
        let contacts = this.state.contacts;
        // @ts-ignore
        let message = this.state.message
        // etc
        contactFormAPI.postInfo(name, contacts, message).then(() => {
            alert('Send message')
        })
        e.target.reset();
    }


    render() {
        return (
            <div className={style.contactForm}>

                <div className={`${styleContainer.container} ${style.contactFormContainer}`}>
                    <Title title={'Contact'}/>
                    <Fade left>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input type="text" placeholder={'Name'} name={'name'} onChange={this.onChange.bind(this)}/>
                        <input type="email" placeholder={'E-mail'} name={'contacts'}
                               onChange={this.onChange.bind(this)}/>
                        <textarea placeholder={'please write what you want'} name={'message'}
                                  onChange={this.onChange.bind(this)}></textarea>
                        <RegularButton title={'Send'}/>
                    </form>
                    </Fade>
                </div>
            </div>

        )
    }
}

export default ContactForm