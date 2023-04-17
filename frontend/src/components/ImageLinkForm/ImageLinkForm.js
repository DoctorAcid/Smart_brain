import React from 'react';
import { motion } from 'framer-motion';

const ImageLinkForm = ({imageError, onInputChange, onButtonSubmit}) => {
  return (
    <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        }}>
        
        <div style={{
            // maxWidth: "80%",
            width: "100%",
            display: "flex",
            flexDirection: 'column',
            borderRadius: "32px",
            backgroundColor: '#292B34',
            border: '1px solid #454754',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '24px 32px 32px 32px',
                borderBottom: '1px solid #454754',
              }}>
                <h1>Face Detector</h1>
                <p style={{lineHeight: '20px', color: '#6F7287'}}>
                  Venda will detect face in your pictures. Give it a try by entring a URL!
                </p>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                padding: '32px'
              }}>
                <motion.div style={{
                  width: '100%',
                  display: 'flex',
                  gap: '24px'
                }}>
                  <motion.input 
                    id="urlInput"
                    style={{
                        height: "26px",
                        width: '100%',
                        borderRadius: "12px",
                        outline: "none",
                        color: "#fff",
                        padding: "12px 16px",
                        backgroundColor: '#454754',
                        border: '1px solid #454754',
                        zIndex: '1',
                    }}
                    animate={{
                      border: imageError === "error" ? "1px solid red" : "1px solid #454754"
                    }}
                    whileFocus={{
                        border: '1px solid #AD00FF'
                    }}
                    type="text" 
                    name="urlInput"
                    onChange={onInputChange}
                    />
                    <motion.input 
                        style={{
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
                        value="Detect" 
                        onClick={onButtonSubmit}
                    />
                </motion.div>
                <motion.div 
                  id="urlError" 
                  style={{
                    display: 'flex',
                    height: '0%',
                    flexDirection: 'row',
                    marginTop: '-25px', 
                    overflow: 'hidden', 
                    gap: '8px', 
                    alignItems: 'center', 
                    justifyContent: 'flex-start',
                    zIndex: '0'
                  }}
                  animate={{
                    height: imageError === "error" ? 'auto' : '0%',
                    marginTop: imageError === "error" ? '0px' : '-25px',
                  }}
                  
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#FF3A5E"/>
                      <path d="M7.11111 4.44444C7.11111 3.95352 7.50908 3.55556 8 3.55556C8.49092 3.55556 8.88889 3.95352 8.88889 4.44444V8.88889C8.88889 9.37981 8.49092 9.77778 8 9.77778C7.50908 9.77778 7.11111 9.37981 7.11111 8.88889V4.44444Z" fill="#FF3A5E"/>
                      <path d="M7.11111 11.5556C7.11111 11.0646 7.50908 10.6667 8 10.6667C8.49092 10.6667 8.88889 11.0646 8.88889 11.5556C8.88889 12.0465 8.49092 12.4444 8 12.4444C7.50908 12.4444 7.11111 12.0465 7.11111 11.5556Z" fill="#FF3A5E"/>
                    </svg>

                    <p style={{fontSize: '12px', color: '#FF3A5E'}}>Please Enter a valid URL</p>
                </motion.div>
              </div>
        </div>
    </div>
  )
}

export default ImageLinkForm