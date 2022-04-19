import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
//import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <Link
                        className="navbar-brand"
                        to="/"
                    >
                        Sistema Maestro Geek
                    </Link>
                    <Link
                        className="navbar-brand"
                        to="/"
                    >
                        <img
                            src="https://res.cloudinary.com/duzf4vfki/image/upload/v1630692325/Clases/geek_wctguy.png"
                            id="icon"
                            alt="User Icon"
                            width="100px" />
                    </Link>
                    <div className="navbar-collapse">
                        <div className="navbar-nav">
                            <NavLink
                                className={(navData) => navData.isActive ? " active nav-item nav-link" : "nav-item nav-link"}
                                to="/Estudiantes"
                            >
                                Estudiantes
                            </NavLink>
                            <NavLink
                                className={(navData) => navData.isActive ? " active nav-item nav-link" : "nav-item nav-link"}
                                to="/"
                            >
                                Buscar
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}