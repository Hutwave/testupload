import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/fsdrk/upload';
var CLOUDINARY_UPLOAD_PRESET = 'fp1kc60l';
/*
var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');
*/

class Upload extends Component {
    
    constructor(props) {
        super(props);
    this.onUpload = this.onUpload.bind(this);
    }

    onUpload(){
		console.log("Upload button pressed, calling parents onUpload()");
		this.props.onUpload(); // this prop function is the parent component's (App.js) function onUpload()
	}

    /*
fileUpload.addEventListener('change', function(event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    });
    */
   
    render() {

       return ( <div>
           Description: <br></br>
           Tags:    <br></br>

          
            <button class="btn btn-lg upload-btn" type="button" onClick={this.onUpload}>Upload File</button>
            <input id="upload-input" type="file" name="uploads[]" multiple="multiple"></input>
           </div>
           )

    }
}

// https://codeburst.io/how-to-handle-multipart-form-data-in-nodejs-file-uploading-in-nodejs-26c0cb88adcf

    export default Upload;  