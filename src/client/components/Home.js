import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>I am the HOME component</h1>
      <button onClick={() => console.log('HI THERE')}>
        Press me
      </button>
    </div>
  );
};

export default Home;
