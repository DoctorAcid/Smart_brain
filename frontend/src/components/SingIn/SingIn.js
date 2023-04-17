import React from 'react';
import { motion } from 'framer-motion';

class SingIn extends React.Component {
    constructor() {
        super();
        this.state = {
            signInEmail: "",
            signInPassword: "",
            errorMsg: ""
        }

    }
    onEmailChange = (event) => {
        const emailError = document.getElementById("emailError");
        emailError.style.display = "none";
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        const passError = document.getElementById("passError");
        passError.style.display = "none";
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method : 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(data => {
                if (data.id) {
                    this.props.loadUser(data);
                    this.props.onRouteChange('home');
                } else {
                    if (data === "invalid info") {
                        const userError = document.getElementById("userError");
                        const emailInput = document.getElementById('emailInput');
                        emailInput.style.border = "1px solid #FF3A5E";
                        this.setState({errorMsg: "User dosn't exist. Please register a new user."});
                        userError.style.display = "flex";
                    }
                    if (data === "wrong password") {
                        const userError = document.getElementById("userError");
                        this.setState({errorMsg: "Wrong password."});
                        userError.style.display = "flex";
                    }
                    if (data === "enter email") {
                        const emailError = document.getElementById("emailError");
                        const emailInput = document.getElementById('emailInput');
                        emailError.style.display = "flex";
                        emailInput.style.border = "1px solid #FF3A5E";
                    }
                    if (data === "enter password") {
                        const passError = document.getElementById("passError");
                        const passInput = document.getElementById('passInput');
                        passError.style.display = "flex";
                        passInput.style.border = "1px solid #FF3A5E";
                    }
                    if (data === "enter email and password") {
                        const emailError = document.getElementById("emailError");
                        const emailInput = document.getElementById('emailInput');
                        const passError = document.getElementById("passError");
                        const passInput = document.getElementById('passInput');
                        passError.style.display = "flex";
                        passInput.style.border = "1px solid #FF3A5E";
                        emailError.style.display = "flex";
                        emailInput.style.border = "1px solid #FF3A5E";
                    }
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <motion.div style={{width: '100vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', gap: '64px'}}>
                <div style={{marginLeft: '32px', maxWidth:'720px', display: 'flex', flex: '1', flexDirection: 'column', gap: '40px'}}>
                    <h1 style={{fontSize: '96px', fontWeight: '700', letterSpacing: '-6px', lineHeight: '88px'}}>We Scan Faces For You!</h1>
                    <p style={{color: '#6F7287', lineHeight: '20px'}}>Venda is a Artifical Intaligent face recognition app that can scan and detect faces from an image. Sign in if you are already a user or register for start now!</p>
                </div>
                <motion.div 
                style={{
                    width: '400px',
                    height: 'fit-content',
                    marginRight: '32px',
                    maxWidth: '80%',
                    // padding: '0 32px 32px 32px',
                    backgroundColor: '#292B34',
                    borderRadius: '32px',
                    border: '1px solid #454754',
                }}>
                    <motion.div 
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            // border: '2px solid blue'
                            // gap: '32px'
                            
                        }}>
                            <motion.div 
                            style={{
                                padding: '32px',
                                borderBottom: '1px solid #454754'
                            }}>
                                <h1>Sign In</h1>
                            </motion.div>
                        <fieldset 
                            style={{
                                // width: "100%",
                                padding: "32px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                // alignItems: "center",
                                gap: "16px",
                                border: "none",
                                // border: '2px solid blue'
                        }}>
                            <div 
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: '4px'
                                }}>
                                <p>
                                        Email
                                </p>
                                <motion.input 
                                    id='emailInput'
                                    style={{
                                        height: "20px",
                                        borderRadius: "12px",
                                        border: "none",
                                        outline: "none",
                                        color: "#fff",
                                        padding: "12px 16px",
                                        backgroundColor: '#454754',
                                        border: '1px solid #454754'
                                    }}
                                    whileFocus={{
                                        border: '1px solid #AD00FF'
                                    }}
                                    type="email" 
                                    name="email"
                                    onChange={this.onEmailChange}
                                    />
                                    <div id="emailError" style={{display: 'none', gap: '8px', alignItems: 'center', justifyContent: 'flex-start'}}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#FF3A5E"/>
                                            <path d="M7.11111 4.44444C7.11111 3.95352 7.50908 3.55556 8 3.55556C8.49092 3.55556 8.88889 3.95352 8.88889 4.44444V8.88889C8.88889 9.37981 8.49092 9.77778 8 9.77778C7.50908 9.77778 7.11111 9.37981 7.11111 8.88889V4.44444Z" fill="#FF3A5E"/>
                                            <path d="M7.11111 11.5556C7.11111 11.0646 7.50908 10.6667 8 10.6667C8.49092 10.6667 8.88889 11.0646 8.88889 11.5556C8.88889 12.0465 8.49092 12.4444 8 12.4444C7.50908 12.4444 7.11111 12.0465 7.11111 11.5556Z" fill="#FF3A5E"/>
                                        </svg>
                                        <p style={{fontSize: '12px', color: '#FF3A5E'}}>Please enter a email ID</p>
                                    </div>
                            </div>
                            <div 
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: '4px'
                                }}
                            >
                                <p>
                                    Password
                                    </p>
                                <motion.input 
                                    id="passInput"
                                    style={{
                                    width: "auto",
                                    height: "20px",
                                    borderRadius: "12px",
                                    border: "none",
                                    outline: "none",
                                    color: "#fff",
                                    padding: "12px 16px",
                                    backgroundColor: '#454754',
                                    border: '1px solid #454754'
                                    }}
                                    whileFocus={{
                                        border: '1px solid #AD00FF'
                                    }}
                                    type="password" 
                                    name="password"
                                    onChange={this.onPasswordChange}
                                    />
                                    <div id="passError" style={{display: 'none', gap: '8px', alignItems: 'center', justifyContent: 'flex-start'}}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#FF3A5E"/>
                                            <path d="M7.11111 4.44444C7.11111 3.95352 7.50908 3.55556 8 3.55556C8.49092 3.55556 8.88889 3.95352 8.88889 4.44444V8.88889C8.88889 9.37981 8.49092 9.77778 8 9.77778C7.50908 9.77778 7.11111 9.37981 7.11111 8.88889V4.44444Z" fill="#FF3A5E"/>
                                            <path d="M7.11111 11.5556C7.11111 11.0646 7.50908 10.6667 8 10.6667C8.49092 10.6667 8.88889 11.0646 8.88889 11.5556C8.88889 12.0465 8.49092 12.4444 8 12.4444C7.50908 12.4444 7.11111 12.0465 7.11111 11.5556Z" fill="#FF3A5E"/>
                                        </svg>
                                        <p style={{fontSize: '12px', color: '#FF3A5E'}}>Please enter a password</p>
                                    </div>
                            </div>

                            <div id="userError" style={{display: 'none', gap: '8px', alignItems: 'center', justifyContent: 'flex-start'}}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#FF3A5E"/>
                                    <path d="M7.11111 4.44444C7.11111 3.95352 7.50908 3.55556 8 3.55556C8.49092 3.55556 8.88889 3.95352 8.88889 4.44444V8.88889C8.88889 9.37981 8.49092 9.77778 8 9.77778C7.50908 9.77778 7.11111 9.37981 7.11111 8.88889V4.44444Z" fill="#FF3A5E"/>
                                    <path d="M7.11111 11.5556C7.11111 11.0646 7.50908 10.6667 8 10.6667C8.49092 10.6667 8.88889 11.0646 8.88889 11.5556C8.88889 12.0465 8.49092 12.4444 8 12.4444C7.50908 12.4444 7.11111 12.0465 7.11111 11.5556Z" fill="#FF3A5E"/>
                                </svg>
                                <p style={{fontSize: '12px', color: '#FF3A5E'}}>{this.state.errorMsg}</p>
                            </div>
                        </fieldset>
                        <motion.div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '32px',
                                alignItems: 'center',
                                padding: '32px',
                                borderTop: '1px solid #454754'
                            }}
                        >
                            <motion.input 
                                style={{
                                    width: '100%',
                                    padding: "12px 24px", 
                                    backgroundColor: "#AD00FF", 
                                    border: "none", 
                                    borderRadius: "12px", 
                                    cursor: "pointer", 
                                    fontSize: "18px",
                                    border: '1px solid #AD00FF',
                                    color: '#292B34',
                                    fontWeight: '700'
                                }}
                                whileHover={{
                                    backgroundColor: '#7200A8',
                                    color: '#CACDDB'
                                }}
                                whileTap={{
                                    backgroundColor: '#292B34',
                                    border: '1px solid #454754'
                                }}
                                type="submit" 
                                value="Sign In" 
                                onClick={this.onSubmitSignIn}
                            />
                        <motion.p
                            onClick={() => onRouteChange('register')} 
                            href="#0" 
                            style={{cursor: "pointer"}}
                            whileHover={{
                                color: '#AD00FF'
                            }}
                            whileTap={{
                                color: '#7200A8'
                            }}
                        >
                            Register
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>        
            </motion.div>
        )
    }
}

export default SingIn