import React from 'react';
import style from './ContactForm.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Button from "../common/Button/Button";
import Title from "../common/Title/Title";


function ContactForm()  {
    return (
        <div className={style.contactForm}>

            <div className= {`${styleContainer.container} ${style.contactFormContainer}`}>
                <Title title={'Contact'} />
            <form>
                <input type="text" placeholder={'Name'} />
                <input type="email"  placeholder={'E-mail'} />
                <textarea>bla bla bla bla</textarea>
                <Button  title={'Send'} />
            </form>

    </div>
        </div>

    )
}

export default ContactForm