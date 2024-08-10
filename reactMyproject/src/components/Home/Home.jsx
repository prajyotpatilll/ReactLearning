import React from "react";
import './Home.css'

export default function Home() {
  return (
    

    <div className="container">
        <div className="header-content">
            <h1>I'm a Photographer<br /></h1>
            <h3>Prajyot patil</h3>

            <ul className="social-links">
                <li>
                    <a href="https://www.instagram.com/lensartz/" className="flex">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/lensartz/" className="flex">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/lensartz/" className="flex">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/lensartz/" className="flex">
                        <i className="fab fa-pinterest"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>

  );
}