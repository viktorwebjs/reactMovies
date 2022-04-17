import React from 'react';

function Preloader() {
  return (
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-green-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper ">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
