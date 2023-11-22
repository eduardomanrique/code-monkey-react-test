import React from 'react';

function Home() {
  return (
    <div style={homeStyle}>
      <h1>Welcome to Code Monkey's Library</h1>
      <p>Explore a world of knowledge and adventure.</p>
      <div style={imageContainerStyle}>
        <img src='/library.png' alt='Library' style={imageStyle} />
      </div>
    </div>
  );
}

const homeStyle = {
  textAlign: 'center',
  padding: '50px',
  backgroundColor: '#f4f4f4',
  borderRadius: '15px',
  margin: '20px',
  boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
};

const imageContainerStyle = {
  marginTop: '30px'
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '10px'
};

export default Home;
