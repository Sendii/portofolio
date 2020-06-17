import React from 'react'

import img_contact from '../asset/img/contact2.png'

function Contact(){
	return (
		<div id="contact">		
			<h2 className="text-center">Contact me on: </h2>
			<div className="row">
				<div className="col-md mt-3">
					<a href="https://www.linkedin.com/in/sendii-hadi-8a49261a4/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Sendi Hadi</a>
				</div>
				<div className="col-md mt-3">
					<a href="mailto:sendidianhadiwijaya@gmail.com?subject=haii" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">sendidianhadiwijaya@gmail.com</a>
				</div>
			</div>
			<div className="row">
				<div className="col-md mt-3">
					<a href="https://github.com/Sendii" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Sendii</a>
				</div>
				<div className="col-md mt-3">
					<a href="https://wa.me/628811424913" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">0895341398265</a>
				</div>
			</div>
			<img className="img-fluid" src={img_contact} alt=""/>
		</div>
		)
}

export default Contact