import React from 'react';
import { motion } from 'framer-motion';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }

    onNameChange = (event) => {
        const nameError = document.getElementById("nameError");
        nameError.style.display = "none";
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        const emailError = document.getElementById("emailError");
        emailError.style.display = "none";
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        const passError = document.getElementById("passError");
        passError.style.display = "none";
        this.setState({password: event.target.value})
    }


    onRegisterSubmit = () => {
        fetch("http://localhost:3000/register", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })

        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            } else {
                if (user === "invalid info") {
                    const userError = document.getElementById("userError");
                    userError.style.display = "flex";
                }
                if (user === "enter name") {
                    const nameError = document.getElementById("nameError");
                    const nameInput = document.getElementById('nameInput');
                    nameError.style.display = "flex";
                    nameInput.style.border = "1px solid red";
                }
                if (user === "enter email") {
                    const emailError = document.getElementById("emailError");
                    const emailInput = document.getElementById('emailInput');
                    emailError.style.display = "flex";
                    emailInput.style.border = "1px solid red";
                }
                if (user === "enter password") {
                    const passError = document.getElementById("passError");
                    const passInput = document.getElementById('passInput');
                    passError.style.display = "flex";
                    passInput.style.border = "1px solid red";
                }
                if (user === "enter email and password and name") {
                    const nameError = document.getElementById("nameError");
                    const nameInput = document.getElementById('nameInput');
                    const emailError = document.getElementById("emailError");
                    const emailInput = document.getElementById('emailInput');
                    const passError = document.getElementById("passError");
                    const passInput = document.getElementById('passInput');
                    nameError.style.display = "flex";
                    nameInput.style.border = "1px solid red";
                    passError.style.display = "flex";
                    passInput.style.border = "1px solid red";
                    emailError.style.display = "flex";
                    emailInput.style.border = "1px solid red";
                }
            }
        })
    }

    render() {
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
                                <h1>Register</h1>
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
                                        Name
                                </p>
                                <motion.input 
                                    id="nameInput"
                                    style={{
                                        height: "20px",
                                        borderRadius: "12px",
                                        outline: "none",
                                        color: "#fff",
                                        padding: "12px 16px",
                                        backgroundColor: '#454754',
                                        border: '1px solid #454754'
                                    }}
                                    whileFocus={{
                                        border: '1px solid #AD00FF'
                                    }}
                                    type="text" 
                                    name="name"
                                    onChange={this.onNameChange}
                                    />
                                    <div id="nameError" style={{display: 'none', gap: '8px', alignItems: 'center', justifyContent: 'flex-start'}}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#FF3A5E"/>
                                            <path d="M7.11111 4.44444C7.11111 3.95352 7.50908 3.55556 8 3.55556C8.49092 3.55556 8.88889 3.95352 8.88889 4.44444V8.88889C8.88889 9.37981 8.49092 9.77778 8 9.77778C7.50908 9.77778 7.11111 9.37981 7.11111 8.88889V4.44444Z" fill="#FF3A5E"/>
                                            <path d="M7.11111 11.5556C7.11111 11.0646 7.50908 10.6667 8 10.6667C8.49092 10.6667 8.88889 11.0646 8.88889 11.5556C8.88889 12.0465 8.49092 12.4444 8 12.4444C7.50908 12.4444 7.11111 12.0465 7.11111 11.5556Z" fill="#FF3A5E"/>
                                        </svg>
                                        <p style={{fontSize: '12px', color: '#FF3A5E'}}>Please Enter your name</p>
                                    </div>
                            </div>

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
                                    id="emailInput"
                                    style={{
                                        height: "20px",
                                        borderRadius: "12px",
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
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#FF3A5E"/>
                                            <path d="M7.11111 4.44444C7.11111 3.95352 7.50908 3.55556 8 3.55556C8.49092 3.55556 8.88889 3.95352 8.88889 4.44444V8.88889C8.88889 9.37981 8.49092 9.77778 8 9.77778C7.50908 9.77778 7.11111 9.37981 7.11111 8.88889V4.44444Z" fill="#FF3A5E"/>
                                            <path d="M7.11111 11.5556C7.11111 11.0646 7.50908 10.6667 8 10.6667C8.49092 10.6667 8.88889 11.0646 8.88889 11.5556C8.88889 12.0465 8.49092 12.4444 8 12.4444C7.50908 12.4444 7.11111 12.0465 7.11111 11.5556Z" fill="#FF3A5E"/>
                                        </svg>
                                        <p style={{fontSize: '12px', color: '#FF3A5E'}}>Please Enter a email ID</p>
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
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#FF3A5E"/>
                                            <path d="M7.11111 4.44444C7.11111 3.95352 7.50908 3.55556 8 3.55556C8.49092 3.55556 8.88889 3.95352 8.88889 4.44444V8.88889C8.88889 9.37981 8.49092 9.77778 8 9.77778C7.50908 9.77778 7.11111 9.37981 7.11111 8.88889V4.44444Z" fill="#FF3A5E"/>
                                            <path d="M7.11111 11.5556C7.11111 11.0646 7.50908 10.6667 8 10.6667C8.49092 10.6667 8.88889 11.0646 8.88889 11.5556C8.88889 12.0465 8.49092 12.4444 8 12.4444C7.50908 12.4444 7.11111 12.0465 7.11111 11.5556Z" fill="#FF3A5E"/>
                                        </svg>
                                        <p style={{fontSize: '12px', color: '#FF3A5E'}}>Please enter a password</p>
                                    </div>
                            </div>
                            <div id="userError" style={{ display: 'none', gap: '8px', alignItems: 'center', justifyContent: 'flex-start'}}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#FF3A5E"/>
                                    <path d="M7.11111 4.44444C7.11111 3.95352 7.50908 3.55556 8 3.55556C8.49092 3.55556 8.88889 3.95352 8.88889 4.44444V8.88889C8.88889 9.37981 8.49092 9.77778 8 9.77778C7.50908 9.77778 7.11111 9.37981 7.11111 8.88889V4.44444Z" fill="#FF3A5E"/>
                                    <path d="M7.11111 11.5556C7.11111 11.0646 7.50908 10.6667 8 10.6667C8.49092 10.6667 8.88889 11.0646 8.88889 11.5556C8.88889 12.0465 8.49092 12.4444 8 12.4444C7.50908 12.4444 7.11111 12.0465 7.11111 11.5556Z" fill="#FF3A5E"/>
                                </svg>
                                <p style={{fontSize: '12px', color: '#FF3A5E'}}>User already exists. Please sign in</p>
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
                                value="Register" 
                                onClick={this.onRegisterSubmit} 
                            />
                        <motion.p
                        onClick={() => this.props.onRouteChange('signin')} 
                        href="#0" 
                        style={{cursor: "pointer"}}
                        whileHover={{
                            color: '#AD00FF'
                        }}
                        whileTap={{
                            color: '#7200A8'
                        }}
                        >
                            Sign In
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>        
            </motion.div>
        //   <div style={{width: "320px"}}>
        //       <div style={{
        //           width: "100%",
        //           padding: "24px",
        //           display: "flex",
        //           flexDirection: "column",
        //           justifyContent: "center",
        //           alignItems: "center",
        //           gap: "16px",
        //           background: "#474a50",
        //           borderRadius: "16px",
        //           }}>
                      
        //               <h1>Sign In</h1>
        //           <fieldset style={{
        //               width: "100%",
        //               padding: "0",
        //           display: "flex",
        //           flexDirection: "column",
        //           justifyContent: "center",
        //           alignItems: "center",
        //           gap: "16px",
        //           border: "none"
        //           }}>
        //               <div style={{
        //                   width: "100%",
        //           display: "flex",
        //           flexDirection: "column",
        //           gap: "8px",
        //           }}>
        //                   <p style={{
        //                       width: "fit-content",
        //                       fontWeight: "400"
        //                       }}>
        //                           Name
        //                   </p>
        //                   <input style={{
        //                       width: "auto",
        //                       height: "32px",
        //                       borderRadius: "8px",
        //                       border: "none",
        //                       outline: "none",
        //                       color: "#000"
        //                       }} 
        //                       type="text" 
        //                       name="name"
        //                       onChange={this.onNameChange}
        //                     />
        //               </div>
        //               <div style={{
        //                   width: "100%",
        //           display: "flex",
        //           flexDirection: "column",
        //           gap: "8px",
        //           }}>
        //                   <p style={{
        //                       width: "fit-content",
        //                       fontWeight: "400"
        //                       }}>
        //                           Email
        //                   </p>
        //                   <input style={{
        //                       width: "auto",
        //                       height: "32px",
        //                       borderRadius: "8px",
        //                       border: "none",
        //                       outline: "none",
        //                       color: "#000"
        //                       }} 
        //                       type="email" 
        //                       name="email"
        //                       onChange={this.onEmailChange}
        //                     />
        //               </div>
        //               <div style={{
        //                   width: "100%",
        //           display: "flex",
        //           flexDirection: "column",
        //           gap: "8px",
        //           }}>
        //                   <p style={{
        //                       width: "fit-content",
        //                       fontWeight: "400"
        //                       }}>Password</p>
        //                   <input style={{
        //                       width: "auto",
        //                       height: "32px",
        //                       borderRadius: "8px",
        //                       border: "none",
        //                       outline: "none",
        //                       color: "#000"
        //                       }} 
        //                       type="password" 
        //                       name="password"
        //                       onChange={this.onPasswordChange}
        //                     />
        //               </div>
        //           </fieldset>
        //           <><input style={{padding: "12px 24px", background: "#b927d6", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "18px"}} type="submit" value="Register" onClick={this.onRegisterSubmit} /></>
        //       </div>
        //   </div>
        )

    }
}

export default Register