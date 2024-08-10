import React from "react";
import './Profile.css';

export default function Profile() {
  return (
    
        <div className="container">
            <div className="about-content grid">
                <div className="about-left">
                    <img src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="abc" />
                </div>
                <div className="about-right">
                    <div className="title">
                        <h2>About Me</h2>
                    </div>
                    <p className="lead">
                        Welcome to the world through my lens! I'm Prajyot Patil, a BCA student with a passion for
                        photography. As a hobbyist photographer, I capture moments that inspire me, from the
                        ordinary to the extraordinary. Join me on a visual journey as I explore the beauty of life
                        through my photographs.
                    </p>
                    <p className="lead">
                        We can checkout his recent works and experiences below. He
                        considers photography as his passion more than profession.
                    </p>
                    
                </div>
            </div>
        </div>
    
  );
}