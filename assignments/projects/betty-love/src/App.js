import React from 'react';



const App = () => {
  return (
    <div>
      <div>
        <header className="header">
          <h1>Betty J. Love</h1>
        </header>
      </div>
      <div className="all-me">
            <a className="about" href="About.html" target="_blank">About</a>
            <a className="resume" href="Resume.html" target="_blank">Resume</a>
            <a className="linkedin" href="https://www.linkedin.com/in/betty-love-794500163/">LinkedIn</a>
            <a className="projects" href="Projects.html" target="_blank">Projects</a>
      </div>
      {/* <div>
        <h2>Projects</h2>
      </div> */}
    </div>
  );
}
export default App;