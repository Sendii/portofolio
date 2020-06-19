import React from 'react'

import img_contact from '../asset/img/contact2.png'

import '../asset/font-awesome/css/font-awesome.min.css'

function Contact(){
	return (
		<div id="contact">		
			<h2>Contact me on: </h2>
			<div className="row">
				<div className="col-md mt-3">
					<a href="https://www.linkedin.com/in/sendii-hadi-8a49261a4/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary"><i className="fa fa-linkedin-square" aria-hidden="true"></i>Sendi Hadi</a>
				</div>
				<div className="col-md mt-3">
					<a href="mailto:sendidianhadiwijaya@gmail.com?subject=haii" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary"><i className="fa fa-envelope" aria-hidden="true"></i>sendidianhadiwijaya@gmail.com</a>
				</div>
			</div>
			<div className="row">
				<div className="col-md mt-3">
					<a href="https://github.com/Sendii" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary"><i className="fa fa-github" aria-hidden="true"></i>Sendii</a>
				</div>
				<div className="col-md mt-3">
					<a href="https://wa.me/628811424913" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary"><i className="fa fa-whatsapp" aria-hidden="true"></i>0895341398265</a>
				</div>
			</div>
			<div className="row justify-content-center">
				<img className="img-fluid" src={img_contact} alt=""/>
			</div>
		</div>
		)
}

export default Contact