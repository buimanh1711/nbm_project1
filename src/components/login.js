import React, { Component } from 'react';
import './login.css';
import crypto from 'crypto-js';
import users from '../users.json';
export default class Login extends Component {
    constructor(props){
        super(props);
        this.user = {
            username: '',
            password: ''
        }
    }
    encode(data) {
        const pass = 'mb1o4er';
        const authCode = crypto.AES.encrypt(data, pass).toString();
        return authCode;
    }
    getUsername(event) {
        this.user.username = event.target.value;
    }
    getPassword(event) {
        this.user.password = event.target.value;
        
    }
    checkUser(users){
        let check = false;
        users.forEach((user, index) => {
            if(user.username === this.user.username &&
               user.password === this.user.password) 
            {
                console.log('logined')
                this.props.signIn();
                this.props.closeForm();
                localStorage.setItem('isLogin', true)
                localStorage.setItem('loginCode', this.encode(this.user.username));
                localStorage.setItem('username', this.encode(this.user.username));
                localStorage.setItem('password', this.encode(this.user.password));
                console.log(this.user);
                check = true;
                return;
            }
        });
        if(!check)
            alert('sai thong tin!');
    }
    render() {
        let loginClass = 'overlay-login';
        if(this.props.login.formOpened) loginClass = loginClass + ' active';
        return (
            <div className={loginClass}>
                <div className='login-block'>
                    <button onClick={ this.props.closeForm } className='close-btn'>X</button>
                    <form method='' className='login-form'>
                        <label htmlFor='username'>Username: </label>
                        <input id='username' name='username' placeholder='username' onChange={ (event)=>this.getUsername(event)} />
                        <label htmlFor='password'>Password: </label>
                        <input type='password' id='password' name='password' placeholder='password' onChange={ (event)=>this.getPassword(event)}/> 
                        <span type='submit' className='login-btn' onClick={ () => { this.checkUser(users); window.location.reload(); } } >Login</span>
                    </form>
                </div>
            </div>
        )
    }
}