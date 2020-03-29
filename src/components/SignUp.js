import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from './store/actions/usresAction.js';
import './SignUp.css';

const SignUp = (props) => {
    const [userInformarion, setuserInformarion] = useState({
        firstName: '',
        secondName: '',
        userName: '',
        email: '',
        phone: ''
    });
    const[pageSignUpClass, setpageSignUpClass] = useState("page-sign-up");

    const handleChange = (text) => {
        let userInfo = Object.assign({}, userInformarion)
        for (let key in userInfo){
           if (key === text.target.id){
               userInfo[key] = text.target.value;
           }
        }
        setuserInformarion(userInfo)
        if (!text.target.validity.valid){
            text.target.className = "input-field__item invalid"
            console.log(text.target.className)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.createUser(userInformarion);
        console.log(props.users);
        setpageSignUpClass('page-sign-up sign-up-success-step1');
        setTimeout(()=> setpageSignUpClass('page-sign-up sign-up-success-step2'), 2400);
    }

    return (
        <div className={pageSignUpClass}>
            <div className="signup-content">
                <div className="box-logo">
                    <div className="box-logo__icon"><img src="/img/logo.png" className="box-logo__img" alt=""/></div>
                    <div className="box-logo__text">yourtext</div>
                </div>
                <h1 className="signup__title">Registration Form</h1>
                <div className="box-form-signup">
                    <form action="" className="form-signup" onSubmit={handleSubmit}>
                        <div className="box-form-name">
                            <div className="input-field">
                                <label htmlFor="firstName" className="input-field__label">First Name</label>
                                <input 
                                type="text" 
                                className="input-field__item" 
                                id="firstName" 
                                pattern="^[a-zA-Zа-яА-Я-]{3,}" 
                                title="Минимум 3 символа" 
                                required 
                                onBlur={handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="secondName" className="input-field__label">Second Name</label>
                                <input 
                                type="text" 
                                className="input-field__item" 
                                id="secondName" 
                                pattern="^[a-zA-Zа-яА-Я-]{3,}"
                                title="Минимум 3 символа"  
                                required 
                                onBlur={handleChange}/>
                            </div>
                        </div>
                        <div className="input-field">
                            <label htmlFor="userName" className="input-field__label">User Name</label>
                            <input 
                            type="text" 
                            className="input-field__item" 
                            id="userName"
                            title="Английские буквы, цифры, минимум 5 символов"  
                            required 
                            onBlur={handleChange} 
                            pattern="^[a-zA-Z0-9-_]{5,}"/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="email" className="input-field__label">Email</label>
                            <input 
                            type="text" 
                            className="input-field__item" 
                            id="email" 
                            required
                            title="example@example.exp" 
                            pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                            onBlur={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="phone" className="input-field__label">Phone Number</label>
                            <input 
                            type="text" 
                            className="input-field__item" 
                            id="phone" 
                            required 
                            pattern="((8|\+7)[0-9]{10})" 
                            title="8XXXXXXXXXX или +7XXXXXXXXXX"  
                            onBlur={handleChange}/>
                        </div>
                        <div className="box-signup-btn">
                            <button type="submit" className='signup-btn'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="block-success">
                <div className="box-success">
                    <img className="box-success__img" src="/img/success.png" alt=""/>
                </div>
            </div>
            <div className="signup-image">
                <img src="/img/rocket.png" className="signup-image__item" alt=""/>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(null, mapDispatchToProps)(SignUp);