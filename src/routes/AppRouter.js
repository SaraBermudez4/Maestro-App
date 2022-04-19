import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Estudiantes from "../components/Estudiantes";
import Navbar from '../components/Navbar';

export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/estudiantes" element={<Estudiantes />} />
                </Routes>
            </BrowserRouter>
        );
    }
}