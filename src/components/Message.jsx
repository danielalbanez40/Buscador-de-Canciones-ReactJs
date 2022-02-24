import React from 'react';
// import { ToastContainer, toast } from "react-toastify";

const Message = (msg,bgColor) => {
    
    // msg = toast.error("🦄 Error!", {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });

    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: bgColor
    }
    
    return (
      <div>
        <p>{msg}</p>

        {/* <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        ; */}
      </div>
    );
}
 
export default Message;