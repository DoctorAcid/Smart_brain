import './App.css';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank'
import { Component } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SingIn from './components/SingIn/SingIn';
import Register from './components/Resgister/Resgister';
import { motion } from 'framer-motion';
// import Clarifai from 'clarifai';

const initialState = {
  input: "",
  imageUrl: "",
  imageError: "",
  box: {},
  route: "signin",
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: ""
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000')
  //     .then(response => response.json())
  //     .then(data => console.log('data : ' + data))
  //     .catch(err => console.log('error : ' + err))
  // }

  calculateFaceLocation = (data) => {
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol : data.left_col * width,
      topRow : data.top_row * height,
      rightCol : width - (data.right_col * width),
      bottomRow : height - (data.bottom_row * height)
    }
  }

  setBoundingBox = (box) => {
    this.setState({box: box})
  }

  
  onInputChange = (event) => {
    this.setState({input: event.target.value});
    this.setState({imageError: "success"});
  }
  
  onButtonSubmit = () => {
    if (this.state.input !== "") {
      this.setState({imageUrl : this.state.input})
      this.setState({imageError: "success"})
      fetch("http://localhost:3000/imageurl", {
        method: "post",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
          url: this.state.input
        })
      })
        .then((response) => response.json())
        .then((boundingBox) => {
          // console.log(boundingBox);
          if (boundingBox === "invalid url") {
            return this.setState({imageError: "error"})
          } else {
            fetch("http://localhost:3000/image", {
              method: "put",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }))
            })
            .catch(err => console.log(err));
            this.setBoundingBox(this.calculateFaceLocation(boundingBox))
          }
        })
        .catch(err => console.log(err));
    } else {
      this.setState({imageError: "error"})
    }

  }

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState(initialState)
    }
    this.setState({route : route});
  }

  

  render() {
    return (
      <motion.div
        style={{
          // border: '2px solid blue',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          // paddingTop: '113px',
          width: '100vw',
          height: '100vh',
          overflowX: 'hidden',
        }}
      >
        <Navigation route={this.state.route} onRouteChange={this.onRouteChange} />
        <motion.div style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '113px',
          height: '100%',
          // justifyContent: 'center',
          alignItems: 'center',
          // border: '2px solid red'
        }}>
          {this.state.route === "home" ? 
            <motion.div style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '80%',
              gap: '64px',
              marginTop: '52px',
            }}>
              <Rank entries={this.state.user.entries} name={this.state.user.name} />
              <ImageLinkForm imageError={this.state.imageError} onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
              <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />
            </motion.div>
          : (this.state.route === "signin" ?
            <motion.div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '64px',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <SingIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            </motion.div>
            : 
            <motion.div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '64px',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
            </motion.div>
          )}
        </motion.div>
        <div style={{
          position: 'fixed',
          zIndex: '-1',
          width: '700px',
          height: '600px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          overflow: "hidden",
          right: '0px',
          top: '0px',
          rotate: '180deg'
        }}>
          <div style={{
            width: 'max-content'
          }}>
            <svg width="994" height="744" viewBox="0 0 994 744" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M826.424 497.151L966.909 577.466V577.833L968.077 578.338C968.832 578.665 969.573 579.02 970.296 579.402L972.168 580.472C980.21 585.438 985.843 593.843 986.98 603.591V691.697C986.98 728.83 946.359 752.105 913.816 733.501L663.409 590.345L826.424 497.151ZM973.158 578.806L971.229 577.703C970.452 577.293 969.657 576.911 968.846 576.56V576.341L828.36 496.027L968.644 415.827C1002.45 396.5 1002.45 348.184 968.644 328.857L826.001 247.309L968.846 165.645V165.519C969.205 165.364 969.56 165.203 969.912 165.036L974.396 162.473C982.305 157.112 987.796 148.51 988.918 138.599V50.2894C988.918 11.6358 946.66 -12.5227 912.854 6.80406L659.084 151.883L407.672 8.15262C373.866 -11.1742 331.608 12.9844 331.608 51.638V154.21L76.1263 8.15308C71.3632 5.43003 66.4323 3.57023 61.4754 2.49259C53.2393 0.702024 44.9316 1.07083 37.2029 3.22705C16.5692 8.98359 0.06227 27.48 0.0622689 51.6385L0.0622689 51.6385L0.062265 139.822C0.180368 140.875 0.347813 141.914 0.562259 142.935C0.916614 144.623 1.3993 146.264 1.99976 147.848L1.99977 51.6385V51.6385C1.99977 46.9969 2.63449 42.5718 3.8088 38.4179C12.029 9.34109 46.6895 -6.444 75.1647 9.83511L636.137 330.539C643.312 334.641 648.904 340.101 652.911 346.319C662.583 362.194 662.58 382.507 652.902 398.38C651.166 401.072 649.133 403.621 646.802 405.98C643.755 409.065 640.2 411.823 636.137 414.146L75.1646 734.85C42.6214 753.454 1.99974 730.179 1.99974 693.046L1.99974 596.744C1.75878 597.38 1.53679 598.025 1.33444 598.678C0.727399 600.639 0.297189 602.675 0.0622445 604.771L0.0622406 693.046C0.0622389 731.7 42.3199 755.859 76.1261 736.532L331.608 590.475V693.046C331.608 731.699 373.866 755.858 407.672 736.531L661.442 591.452L912.854 735.183C946.66 754.51 988.918 730.351 988.918 691.697V603.48C987.739 593.06 981.729 584.087 973.158 578.806ZM654.545 399.413C650.179 406.566 643.921 412.85 635.77 417.509L333.545 590.289V693.046C333.545 730.179 374.167 753.454 406.71 734.849L967.682 414.145C1000.19 395.562 1000.19 349.122 967.682 330.539L406.71 9.83465C374.167 -8.77004 333.545 14.505 333.545 51.638V154.395L635.77 327.175C643.926 331.838 650.188 338.126 654.554 345.286C665.089 361.648 665.086 383.054 654.545 399.413ZM968.077 163.741L966.909 164.246V164.521L824.064 246.185L661.05 152.991L913.816 8.48609C946.359 -10.1186 986.98 13.1564 986.98 50.2894V138.488C985.901 147.743 980.769 155.788 973.369 160.828L969.016 163.317C968.706 163.463 968.393 163.604 968.077 163.741ZM304.224 417.51L15.6352 582.494L7.75205 587.001C9.74058 584.654 12.0482 582.582 14.6088 580.849L19.0497 578.31C19.4077 578.14 19.7692 577.976 20.1341 577.818V577.69L303.263 415.828C337.069 396.501 337.069 348.184 303.263 328.857L20.134 166.994V166.774C19.409 166.46 18.6973 166.122 17.9999 165.76C17.9002 165.709 17.8009 165.657 17.7019 165.604L15.8776 164.561C13.2504 162.949 10.8629 160.99 8.78016 158.75C8.48262 158.43 8.1913 158.104 7.9064 157.772L304.224 327.175C339.332 347.246 339.332 397.439 304.224 417.51Z" fill="url(#paint0_linear_12_52)"/>
              <defs>
              <linearGradient id="paint0_linear_12_52" x1="-6.49999" y1="746" x2="974" y2="-8.63524e-06" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7200A8"/>
              <stop offset="1" stopColor="#7200A8" stopOpacity="0"/>
              </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div style={{
          position: 'fixed',
          zIndex: '-1',
          width: '700px',
          height: '600px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          overflow: "hidden",
          left: '0px',
          bottom: '0px'
        }}>
          <div style={{
            width: 'max-content'
          }}>
            <svg width="994" height="744" viewBox="0 0 994 744" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M826.424 497.151L966.909 577.466V577.833L968.077 578.338C968.832 578.665 969.573 579.02 970.296 579.402L972.168 580.472C980.21 585.438 985.843 593.843 986.98 603.591V691.697C986.98 728.83 946.359 752.105 913.816 733.501L663.409 590.345L826.424 497.151ZM973.158 578.806L971.229 577.703C970.452 577.293 969.657 576.911 968.846 576.56V576.341L828.36 496.027L968.644 415.827C1002.45 396.5 1002.45 348.184 968.644 328.857L826.001 247.309L968.846 165.645V165.519C969.205 165.364 969.56 165.203 969.912 165.036L974.396 162.473C982.305 157.112 987.796 148.51 988.918 138.599V50.2894C988.918 11.6358 946.66 -12.5227 912.854 6.80406L659.084 151.883L407.672 8.15262C373.866 -11.1742 331.608 12.9844 331.608 51.638V154.21L76.1263 8.15308C71.3632 5.43003 66.4323 3.57023 61.4754 2.49259C53.2393 0.702024 44.9316 1.07083 37.2029 3.22705C16.5692 8.98359 0.06227 27.48 0.0622689 51.6385L0.0622689 51.6385L0.062265 139.822C0.180368 140.875 0.347813 141.914 0.562259 142.935C0.916614 144.623 1.3993 146.264 1.99976 147.848L1.99977 51.6385V51.6385C1.99977 46.9969 2.63449 42.5718 3.8088 38.4179C12.029 9.34109 46.6895 -6.444 75.1647 9.83511L636.137 330.539C643.312 334.641 648.904 340.101 652.911 346.319C662.583 362.194 662.58 382.507 652.902 398.38C651.166 401.072 649.133 403.621 646.802 405.98C643.755 409.065 640.2 411.823 636.137 414.146L75.1646 734.85C42.6214 753.454 1.99974 730.179 1.99974 693.046L1.99974 596.744C1.75878 597.38 1.53679 598.025 1.33444 598.678C0.727399 600.639 0.297189 602.675 0.0622445 604.771L0.0622406 693.046C0.0622389 731.7 42.3199 755.859 76.1261 736.532L331.608 590.475V693.046C331.608 731.699 373.866 755.858 407.672 736.531L661.442 591.452L912.854 735.183C946.66 754.51 988.918 730.351 988.918 691.697V603.48C987.739 593.06 981.729 584.087 973.158 578.806ZM654.545 399.413C650.179 406.566 643.921 412.85 635.77 417.509L333.545 590.289V693.046C333.545 730.179 374.167 753.454 406.71 734.849L967.682 414.145C1000.19 395.562 1000.19 349.122 967.682 330.539L406.71 9.83465C374.167 -8.77004 333.545 14.505 333.545 51.638V154.395L635.77 327.175C643.926 331.838 650.188 338.126 654.554 345.286C665.089 361.648 665.086 383.054 654.545 399.413ZM968.077 163.741L966.909 164.246V164.521L824.064 246.185L661.05 152.991L913.816 8.48609C946.359 -10.1186 986.98 13.1564 986.98 50.2894V138.488C985.901 147.743 980.769 155.788 973.369 160.828L969.016 163.317C968.706 163.463 968.393 163.604 968.077 163.741ZM304.224 417.51L15.6352 582.494L7.75205 587.001C9.74058 584.654 12.0482 582.582 14.6088 580.849L19.0497 578.31C19.4077 578.14 19.7692 577.976 20.1341 577.818V577.69L303.263 415.828C337.069 396.501 337.069 348.184 303.263 328.857L20.134 166.994V166.774C19.409 166.46 18.6973 166.122 17.9999 165.76C17.9002 165.709 17.8009 165.657 17.7019 165.604L15.8776 164.561C13.2504 162.949 10.8629 160.99 8.78016 158.75C8.48262 158.43 8.1913 158.104 7.9064 157.772L304.224 327.175C339.332 347.246 339.332 397.439 304.224 417.51Z" fill="url(#paint0_linear_12_52)"/>
              <defs>
              <linearGradient id="paint0_linear_12_52" x1="-6.49999" y1="746" x2="974" y2="-8.63524e-06" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7200A8"/>
              <stop offset="1" stopColor="#7200A8" stopOpacity="0"/>
              </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default App;
