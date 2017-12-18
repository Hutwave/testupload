import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import cloudinary from 'cloudinary';
/*
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
        
        
        let uploadinput = document.getElementById('uploadinput');
        let formData = new FormData();
        formData.append('uploadinput', file);
        let files = uploadinput.files;
        var file = files[0];
       
        this.props.onUpload(file);
        
    }


   
      
    
    // Selainupload:

    /*
    
    */

    

   
    render() {

       return ( <div>
           Description: <br></br>
           Tags:    <br></br><br></br>
            <form id="file-form" method="post" encType="multipart/form-data">
            <input id="uploadinput" type="file" name="uploads[]" multiple="multiple"></input><br></br><br></br>
                </form>
           
           <button class="btn btn-lg upload-btn" type="button" onClick={this.onUpload}>Upload File</button>
            
           </div>
           )

    }
}


    export default Upload;  