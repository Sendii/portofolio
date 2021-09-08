import React from 'react'

import img_school from '../asset/img/school.png'
import img_intern from '../asset/img/intern.png'
import img_work from '../asset/img/work.png'
import img_univ from '../asset/img/univ.png'

function About(){
	return (
		<div>
			<h2>About Me</h2>
			{/*<div className="row" id="img-about">
				<div className="col-md-2">
					<img src="https://img.icons8.com/bubbles/2x/school.png" className="img-circle" alt="not found" />					
				</div>
			</div>*/}
			<div className="projects-scroll">
			<div className="row" id="img-about">
				<div className="col-md-2">
					<img src={img_work} className="img-circle" alt="not found" />					
				</div>
				<div className="col ml-3">
					<div className="row">
						<h4>Work at <a href="https://duaz-solusi.co.id/" target="_blank" rel="noopener noreferrer">PT. Duaz Solusi</a> <br /> Juli 2020 - Now</h4>
					</div>
					<div className="row">
						<p>
							After being affected by the pandemic at work before, I was finally unemployed for two months. In the end I got a job here. I got a lot of new things in this place, starting from being more familiar with reading ERD, and many more, as well as making some pretty big projects, one of which is Market Place.
						</p>
					</div>
				</div>
			</div>
			<div className="row" id="img-about">
				<div className="col-md-2">
					<img src={img_univ} className="img-circle" alt="not found" />
				</div>
				<div className="col ml-3">
					<div className="row">
						<h4>College at <a href="https://unindra.ac.id/" target="_blank" rel="noopener noreferrer">Universitas Indraprasta</a> as S1 Teknik Informatika <br /> 2020 - Now</h4>
					</div>
					<div className="row">
						<p>
							Finally I went to college in the <b><i>afternoon</i></b>, maybe so that in the future I could be welcomed by working
						</p>
					</div>
				</div>
			</div>
			<div className="row" id="img-about">
				<div className="col-md-2">
					<img src={img_work} className="img-circle" alt="not found" />					
				</div>
				<div className="col ml-3">
					<div className="row">
						<h4>Work at <a href="https://multiinti.com/" target="_blank" rel="noopener noreferrer">PT. Multi Inti Digital Bisnis</a> <br /> Mei 2019 - Mei 2020</h4>
					</div>
					<div className="row">
						<p>
							I finally felt the <b><i>real world</i></b> of work. I really gained a lot of new knowledge from here. I also got a lot of new relationships there. I learned a lot about teamwork to complete an ongoing project.
						</p>
					</div>
				</div>
			</div>
			<div className="row" id="img-about">
				<div className="col-md-2">
					<img src={img_intern} className="img-circle" alt="not found" />
				</div>
				<div className="col ml-2">
					<div className="row">
						<h4>Internship at <a href="https://www.sucofindo.co.id/" target="_blank" rel="noopener noreferrer">PT. Sucofindo(Divisi Umum)</a> <br /> February 2018 - April 2018</h4>
					</div>
					<div className="row">
						<p>
							In February 2018, I'm trying to work on a real place. PT. Sucofindo(Divisi Umum) is the place I've pick to Internship for 3 months. I created <b><i>document monitoring for tracing</i></b>, and i study a new more.. Working in a team, follow the instruction carefully, and many more
						</p>
					</div>
				</div>
			</div>
			<div className="row" id="img-about">
				<div className="col-md-2">
					<img src={img_school} className="img-circle" alt="not found" />					
				</div>
				<div className="col ml-3">
					<div className="row">
						<h4>Vocational School <a href="https://smkn10jakarta.sch.id/" target="_blank" rel="noopener noreferrer">(Smkn 10 Jakarta)</a> <br /> 2016-2019</h4>
					</div>
					<div className="row">
						<p>
							From here I start my exploration about <b><i>coding</i></b>. Web programming, desktop programming, android programming, and many more. I've learned from this school. And because of that I've found my passion is <b><i>web developer</i></b>
						</p>
					</div>
				</div>
			</div>
			</div>
		</div>
		)
}

export default About