import React from 'react'

import img_multiinti from '../asset/img/multiinti.PNG'
import img_divsum from '../asset/img/divsum.PNG'
import img_pms from '../asset/img/pms.png'
import img_adpi from '../asset/img/adpi.PNG'
import img_mdl from '../asset/img/mdl.png'
import img_laraven from '../asset/img/laraven.PNG'
import img_sekolahkarir from '../asset/img/sekolah-karir.PNG'


function Project(){
	return (
		<div>
			<h2>Project</h2>
			<p className="mb-4">
				Here are some projects that I have ever made:
			</p>

			<div className="projects-scroll">
				<div className="row">
					<div className="col-md-4 mb-4">
						<div className="box-card">
							<div className="card shadow">
								<div className="card-image">
								<img src={img_multiinti} alt="Ini gambar"/>
								</div>
								<div className="card-body">
									<div className="card-title">
									<h5>
										Multi Inti									</h5>
									</div>
									<div className="card-description">
										<p>
											Company Profile
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 mb-4">
						<div className="box-card">
							<div className="card shadow">
								<div className="card-image">
								<img src={img_divsum} alt="Ini gambar"/>
								</div>
								<div className="card-body">
									<div className="card-title">
									<h5>
										Divisi Umum									</h5>
									</div>
									<div className="card-description">
										<p>
											Document Monitoring
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 mb-4">
						<div className="box-card">
							<div className="card shadow">
								<div className="card-image">
								<img src={img_pms} alt="Ini gambar"/>
								</div>
								<div className="card-body">
									<div className="card-title">
									<h5>
										Project Management System									</h5>
									</div>
									<div className="card-description">
										<p>
											Tracing Shipment with Report
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 mb-4">
						<div className="box-card">
							<div className="card">
								<div className="card-image">
								<img src={img_adpi} alt="Ini gambar"/>
								</div>
								<div className="card-body">
									<div className="card-title">
									<h5>
										Asosiasi Dana Pensiun Indonesia									</h5>
									</div>
									<div className="card-description">
										<p>
											Company Profile with Cms
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 mb-4">
						<div className="box-card">
							<div className="card shadow">
								<div className="card-image">
								<img src={img_mdl} alt="Ini gambar"/>
								</div>
								<div className="card-body">
									<div className="card-title">
									<h5>
										MD Logistik									</h5>
									</div>
									<div className="card-description">
										<p>
											Company Profile with Cms
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 mb-4">
						<div className="box-card">
							<div className="card shadow">
								<div className="card-image">
								<img src={img_laraven} alt="Ini gambar"/>
								</div>
								<div className="card-body">
									<div className="card-title">
									<h5>
										Laraventory									</h5>
									</div>
									<div className="card-description">
										<p>
											Inventory Management School
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 mb-4">
						<div className="box-card">
							<div className="card shadow" style={{height: '300px'}}>
								<div className="card-image">
								<img src={img_sekolahkarir} alt="Ini gambar"/>
								</div>
								<div className="card-body">
									<div className="card-title">
									<h5>
										Sekolah Karir							</h5>
									</div>
									<div className="card-description">
										<p>
											Website komunitas yang memiliki banyak peserta dan dapat mengubah isi dalam konten Website.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<h4 style={{display: 'flex', alignItems: 'flex-end', paddingBottom: '25px'}}>More ... </h4>
				</div>
			</div>
			
		</div>
		)
}

export default Project