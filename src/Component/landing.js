import React from 'react'
import { Link } from "react-router-dom";

const linkStyle = {
    textDecoration: "none",
    color: 'black'
  };

export default function Landing() {
    return (
        <>
            <div className="landing">
                <div className="landingimg">
                    <img width={400} src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                </div>
                <div className="enter">
                    <img width={400} src="https://cdn.icon-icons.com/icons2/2699/PNG/512/instagram_logo_icon_170643.png" alt="" />
                    <button> <Link to="/main"  style={linkStyle} >Enter</Link>   </button>
                </div>
            </div>
        </>
    )
}
