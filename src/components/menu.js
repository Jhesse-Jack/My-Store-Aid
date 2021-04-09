import React from 'react';
import '../bootstrap.min.css';
import './layout.scss';
import { 
    BrowserRouter as Router,
    Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="row">
            <div className="col-3" />
            <div className="col-8">
                <section id="menu" style={styles.menu}>
                    <div className="col-5" /> 
                    <nav className="menunav col-3 text-end">
                        <Router className="col-3">
                            <Link to="/" className="branch">
                                <span>
                                    Branches
                                </span>
                            </Link>
                            <Link to="/" className="logout col-3">
                                <span>
                                    LOGOUT
                                </span>
                            </Link>
                        </Router>
                    </nav>
                </section>
            </div>
            <div className="col-1">

            </div>
        </div>

    )
};

const styles = {
    menu: {
        margin: '3.8%',
        padding: '0%',
        border: '0',
        fontSize: '100%',
        font: 'inherit',
        verticalAlign: 'baseline',
        display: 'block',
    }
};

export default Menu