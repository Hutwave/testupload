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
	onUpload(){
    console.log("Upload images logic goes here");
     
    cloudinary.uploader.upload("https://cloudinary-res.cloudinary.com/image/asset/dpr_2.0/logo-e0df892053afd966cc0bfe047ba93ca4.png", function(result) { 
      console.log(result) 
    });
   


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
