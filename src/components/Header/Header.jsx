import React, { } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/Logo.png'
import './Header.css';

const Header = () => {
    return (
        <header className="header-top">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#"><img src={logo} alt=""/></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <form action="">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search your Destination..." aria-label="Search"></input>
                </form>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/home">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Destination</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/Login">
                                <button className="btn btn-warning" type="submit">Login</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;