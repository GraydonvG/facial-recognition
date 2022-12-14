import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <>
      <div className="tc form-container">
        <p className="f3">{'This Magic Brain will detect faces in your pictures. Give it a try!'}</p>
        <div className="center">
          <div className="form center pa4 br3 shadow-3">
            <input
              className="form-input f4 pa2 center"
              type="text"
              placeholder="Enter image URL here"
              onChange={onInputChange}
            />
            <button
              className="form-btn f4 ph3 pv2 link grow dib white bg-light-purple"
              onClick={onButtonSubmit}>
              Detect
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageLinkForm;
