import React from 'react';
import '../bootstrap.min.css';
import './layout.scss';
import { 
    BrowserRouter as Router,
    Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="row">
        <header id="header" style={styles.header}>
            <nav className="left">
                <Router>
                    <Link to="/" className="logo">
                        <span>
                            My Store Aid Ghana
                        </span>
                    </Link>
                </Router>   
            </nav>
            <nav className="right">
                <Router>
                    <Link to="../SearchResults/index" className="button alt">
                        <span>
                            Branches
                        </span>
                    </Link>
                    <Link to="/" className="button alt">
                        <span>
                            LOGOUT
                        </span>
                    </Link>
                </Router>
            </nav>
        </header>
        </div>
    )
};

const styles = {
    header: {
        margin: '0%',
        padding: '0%',
        border: '0',
        fontSize: '100%',
        font: 'inherit',
        verticalAlign: 'baseline',
        display: 'block',
    }
};

export default Header