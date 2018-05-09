import React from 'react';
import {Link} from 'react-router-dom';

/**
 *
 * @param props
 * @returns {*}
 *
 * @constructor
 */
const Navigation = ({}) => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">REACT 102</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className={`nav-link active`} to={'/'}>
                            Home
                            <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link`} to={'/about'}>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
};

export default Navigation
