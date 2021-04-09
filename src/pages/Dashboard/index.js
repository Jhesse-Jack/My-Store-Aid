import React from 'react';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import '../../App.css';
import '../../bootstrap.min.css';

const Dashboard = () => {
	return (
		<div className="App">
			<Header />
			<section className="App-header">
				<p>
					Search for a branch
                    &nbsp;
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter any branch"
                        title="Branch to be searched" />
				</p>
                <button>
                    SEARCH
                </button>
			</section>
			<Footer />
		</div>
	);
};

export default Dashboard;
