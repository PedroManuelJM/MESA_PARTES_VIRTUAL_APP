import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // icon 
import { faFilePdf} from '@fortawesome/free-solid-svg-icons'; //icon 
class FileUpload extends Component {
  constructor () {
    super();
    this.state = {
      uploadValue: 0
    };
  }

  render () {
    return (
      <div className="form-group text-center">
        <progress value={this.props.uploadValue} max="100"> 
           <span> {this.props.uploadValue}%  </span> 
        </progress>
        <br/>
        <span>Adjuntar archivo <FontAwesomeIcon className="fa-icon" icon={faFilePdf}/></span>
        <div className="custom-file">
            <input id="file"  type="file" onChange={this.props.onUpload} />
        </div>
      </div>
    )
  }
}
export default FileUpload;
