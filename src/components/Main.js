import React, {Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Upload from './Upload';
import Cloudinary from 'cloudinary';
var cloudinary = require('cloudinary');
class Main extends React.Component {

	constructor(props){
		super(props);
	
		this.onUpload = this.onUpload.bind(this);

	}
		
	onUpload(){
		console.log("Upload button pressed, calling parents onUpload()");
		this.props.onUpload(); // this prop function is the parent component's (App.js) function onUpload()
	}
	
	render() {
		let tempRender;

            tempRender =
				<div>
				<Upload onUpload={this.onUpload}/>
				</div>
			
		return tempRender;
		
	}
}

export default Main;    