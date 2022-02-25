import React from "react";
import { Link } from "react-router-dom";

const Show = () => {
	return (
		<section className="show">
			<div className="container">
				<div className="row">
					<div className="col-full">
						<div className="not-found">Show page not found!</div>
					</div>
				</div>

				<div className="row">
					<div className="col-1-4">
						<div className="show-img">
							<img src="" alt="show image title" />
						</div>
					</div>
					<div className="col-3-4">
						<div className="show-info">
							<h1 className="mb-2">Show Full title</h1>
							<div className="show-info_type mb-2">
								<span className="badge">Comdey</span>
								<span className="badge">Drama</span>
							</div>
							<div className="show-info_status mb-1">
								<strong>Status:</strong> Running
							</div>
							<div className="show-info_rating mb-1">
								<strong>Rating:</strong> 5.8
							</div>
							<div className="show-info_site mb-1">
								<Link to="#" target="_blank" className="text-danger">
									<b>Official Site:</b>
								</Link>
							</div>

							<div className="show-info_about d-flex">
								<b>Story:</b>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dolor, quidem. Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Mollitia, ea.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Show;
