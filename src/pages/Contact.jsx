import React from "react";

function Contact() {
  return (
    <div style={{ 
      padding: "0", 
      width: '100vw', 
      minHeight: '100vh',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ padding: "2rem" }}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:eunyuj648@gmail.com">eunyuj648@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/wjddsmdb" target="_blank" rel="noreferrer">https://github.com/wjddsmdb</a></p>
      </div>
    </div>
  );
}

export default Contact;
