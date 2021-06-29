import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-lg-5">
        <a className="navbar-brand" href="#">Start Boostrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
            </div>
        )
    }
}
