import React from 'react'

import '../asset/font-awesome/css/font-awesome.min.css'
import img_css from '../asset/img/css.webp'
import img_php from '../asset/img/php.webp'
import img_laravel from '../asset/img/laravel.svg'
import img_jquery from '../asset/img/jquery.png'
import img_git from '../asset/img/git.webp'
import img_bootstrap from '../asset/img/bootstrap.webp'
import img_react from '../asset/img/react.png'
import img_wp from '../asset/img/wp.png'
import img_golang from '../asset/img/golang.png'

function Skill(){
	return (
		<div id="skills">
			<h2>Skill</h2>
			<div className="projects-scroll">
				<div className="row">
					<div className="col-md-4">
						<img className="center img-circle" src={img_css} alt=""/>
						<div className="row center">
							<div className="col">CSS</div>
						</div>
						<div className="row">
							<div className="col">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<img className="center img-circle" src={img_php} alt=""/>
						<div className="row center">
							<div className="col">PHP</div>
						</div>
						<div className="row">
							<div className="col">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<img className="center img-circle" src={img_laravel} alt=""/>
						<div className="row ml-3">
							<div className="col">Laravel</div>
						</div>
						<div className="row">
							<div className="col">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<img className="center img-circle" src={img_jquery} alt=""/>
						<div className="row ml-3">
							<div className="col">Jquery</div>
						</div>
						<div className="row">
							<div className="col">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<img className="center img-circle" src={img_git} alt=""/>
						<div className="row center">
							<div className="col">Git</div>
						</div>
						<div className="row">
							<div className="col">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<img className="center img-circle" src={img_bootstrap} alt=""/>
						<div className="row ml-3">
							<div className="col">Bootstrap</div>
						</div>
						<div className="row">
							<div className="col">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<img className="center img-circle" src={img_react} alt=""/>
						<div className="row ml-3">
							<div className="col">ReactJS</div>
						</div>
						<div className="row">
							<div className="col">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<img className="center img-circle" src={img_wp} alt=""/>
						<div className="row ml-1">
							<div className="col">Wordpress</div>
						</div>
						<div className="row">
							<div className="col">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<img className="center img-circle" src={img_golang} alt=""/>
						<div className="row ml-3">
							<div className="col">Golang</div>
						</div>
						<div className="row">
							<div className="col">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Skill