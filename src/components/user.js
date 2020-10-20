import React, { Component } from 'react';
import './user.css';
import crypto from 'crypto-js';

export default class User extends Component {
    constructor(props){
        super(props);
    }
    openForm(){
    }
    encode(data) {
        const pass = 'mb1o4er';
        const encodeInfo = crypto.AES.encrypt(data, pass).toString();
        return encodeInfo;
    }
    decrypt = (data, passphrase) => {
        const bytes = crypto.AES.decrypt(data, passphrase);
        let originalText;
        try {
          originalText = bytes.toString(crypto.enc.Utf8);
        } catch (e) {
          originalText = "";
        }
        return originalText;
    };    
    logout() {
        localStorage.clear();
        window.location.reload();
    }
    render() {
        // return (
        //     <div className="user--off">
        //         <button className="sign-btn" onClick={ this.props.openForm }>Sign in</button>
        //         <button className='sign-btn'>Sign up</button>
        //     </div> 
        //  );

        if(!localStorage.getItem('isLogin')){
            return (
               <div className="user--off">
                   <button className="sign-btn" onClick = {this.props.openForm}>Sign in</button>
                   <button className='sign-btn'>Sign up</button>
               </div> 
            );
        } else {
            return (
                <div className = 'user--on'>
                    <div className='user--login'>
                        <div className='avt'></div>
                        { this.decrypt(localStorage.getItem('username'),'mb1o4er') }
                        <div className='sign_out' onClick={ this.logout }>Logout</div>
                    </div>
                </div>
            )
        }
    }
}