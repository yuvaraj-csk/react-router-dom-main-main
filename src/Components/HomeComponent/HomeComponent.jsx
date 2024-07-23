import React from 'react';
import '../HomeComponent/HomeComponent.css'; 
import img from '../../assets/Images/sse.jpg'; 

const HomeComponent = () => {
  return (
    <React.Fragment>
      <div className="background-container" style={{ backgroundImage: `url(${img})` }}>
        <div className="overlay">
          <h1 className="title">Welcome to Our College</h1>
          <h3 className="subtitle">Your future starts here. Learn more about our programs and events.</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeComponent;
