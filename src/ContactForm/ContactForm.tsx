import React from 'react';
import style from './ContactForm.module.css'
import styleContainer from '../common/styles/Container.module.css'
import styleTitle from '../common/styles/Title.module.css'
import Button from "../common/Button/Button";


function ContactForm()  {
    return (
        <div className={style.contactForm}>
            <h2 className={styleTitle.title}>Contact</h2>
            <div className= {`${styleContainer.container} ${style.contactFormContainer}`}>
            <form>
                <input type="text" placeholder={'Name'} />
                <input className={style.emailInput} type="email"  placeholder={'E-mail'} />
                <textarea>bla bla bla bla</textarea>
            </form>
            <Button title={'Send'} />
    </div>
        </div>

    )
}

export default ContactForm