import React from 'react';
// import { ToastContainer, toast } from "react-toastify";

const Message = ({msg,bgColor}) => {
    
    
    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: bgColor
    }
    
    return (
      <div style={styles}>
        <p>{msg}</p>
      </div>
    );
}
 
export default Message;