import React from 'react';
import '../bootstrap.min.css';
import './layout.scss';

const Footer = () => {
	return (
		<footer id="footer" style={styles.footer}>
			<div class="inner">
				<h2>Get In Touch</h2>
				<ul class="actions">
					<li>
						<span class="icon fa-phone" /> <a href="#">(000) 000-0000</a>
					</li>
					<li>
						<span class="icon fa-envelope" /> <a href="#">information@untitled.tld</a>
					</li>
					<li>
						<span class="icon fa-map-marker" /> 123 Somewhere Road, Nashville, TN 00000
					</li>
				</ul>
			</div>
			<div class="copyright">
				&copy; Untitled. Design <a href="https://templated.co">TEMPLATED</a>. Images{' '}
				<a href="https://unsplash.com">Unsplash</a>.
			</div>
		</footer>
	);
};

const styles = {
	footer: {
		margin: '0%',
		padding: '0%',
		border: '0',
		fontSize: '100%',
		font: 'inherit',
		verticalAlign: 'baseline',
		display: 'block'
	}
};

export default Footer;
