import React from "react";
import './header.css';

const Header = () => {
    return (
        <div className="navbar">
            <img src="src/assets/logo.png" alt="logo" className="logo" />
            <div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link">Products ▼</a>
                        <div>
                            <div className="dropdown-content">
                                <div className="product-section">
                                    <div className="left">
                                        <div className="product-item">
                                            <i className="icon blog-icon">📖</i>
                                            <div>
                                                <h4>Blog</h4>
                                                <p>The latest industry news, updates, and info.</p>
                                            </div>
                                        </div>
                                        <div className="product-item">
                                            <i className="icon stories-icon">✨</i>
                                            <div>
                                                <h4>Customer stories</h4>
                                                <p>Learn how our customers are making big changes.</p>
                                            </div>
                                        </div>
                                        <div className="product-item">
                                            <i className="icon tutorials-icon">🎥</i>
                                            <div>
                                                <h4>Video tutorials</h4>
                                                <p>Get up and running on new features and techniques.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="product-highlight">
                                            <img src="src/assets/girl.png" alt="Update" />
                                            <div>
                                                <h4>We've just released an update!</h4>
                                                <p>Check out the all-new dashboard view. Pages now load faster.</p>
                                                <a href="#" className="highlight-link">Dismiss</a>
                                                <a href="#" className="highlight-link" id="changelog">Changelog</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link">Resources ▼</a>
                        <div>
                            <div className="dropdown-content">
                                <div className="product-section">
                                    <div className="left">
                                        <div className="product-item">
                                            <i className="icon blog-icon">📖</i>
                                            <div>
                                                <h4>Blog</h4>
                                                <p>The latest industry news, updates, and info.</p>
                                            </div>
                                        </div>
                                        <div className="product-item">
                                            <i className="icon stories-icon">✨</i>
                                            <div>
                                                <h4>Customer stories</h4>
                                                <p>Learn how our customers are making big changes.</p>
                                            </div>
                                        </div>
                                        <div className="product-item">
                                            <i className="icon tutorials-icon">🎥</i>
                                            <div>
                                                <h4>Video tutorials</h4>
                                                <p>Get up and running on new features and techniques.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="product-highlight">
                                            <img src="src/assets/girl.png" alt="Update" />
                                            <div>
                                                <h4>We've just released an update!</h4>
                                                <p>Check out the all-new dashboard view. Pages now load faster.</p>
                                                <a href="#" className="highlight-link">Dismiss</a>
                                                <a href="#" className="highlight-link" id="changelog">Changelog</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Pricing</a>
                    </li>
                </ul>
            </div>
            <div className="profile dropdown">
                <img src="src/assets/profile.png" alt="Profile" />
            </div>
        </div>
    );
};
export default Header;
