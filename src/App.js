import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main';
import cloudinary from 'cloudinary';

class App extends Component {



	constructor(props){
		super(props);
		this.state = {
		};

		this.onUpload = this.onUpload.bind(this);
    
    cloudinary.config({
      cloud_name: 'fsdrk',
      api_key: '659274845159812',
      api_secret: '4tcWnRrxsrqzgPxKWRS78ACsMrM'
  });

  
	}

//	When upload button is pressed in NavigationBar.js this function is called
	onUpload(file){
    console.log("Upload images logic goes here");
      
      	
	onLogin(userinfo){
		
		let uploadfetch={
		method: "POST",
		headers:{"Content-Type":"application/json"},
		mode:"cors",
		body:JSON.stringify({"username":userinfo.username,
							 "password":userinfo.password,
							 "email":"Dummy@mail.com"}) // TODO "email":userinfo.email, <- edit LoginForm
		}
		
		fetch("/upload",uploadfetch).then((response)=>{
			if(response.ok){
				response.json().then((data)=>{
					console.log("Logged in: " +userinfo.username);
					this.setState({
						isLogged:true,
						userName:userinfo.username,
						chosenPage:"Main"
					})
				});
			}else{
				console.log("Login: Something went wrong.");
			}
		});
	}
	
    
    }


	

// Calling more functions from navbar: register, in and out



  render() {
    return (
		<div>
      	<Main onUpload={this.onUpload}/>
		</div>
    );
  }
}

export default App;
