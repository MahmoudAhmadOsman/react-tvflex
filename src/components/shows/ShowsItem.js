import React from "react";
import { Link } from "react-router-dom";

const ShowsItems = () => {
	return (
		<Link to={`/shows/1`} className="show-item">
			<div className="show-item_img">
				<img src="" alt="" />
				<div className="show-item_img-hover">
					<div className="rating">
						<span>⭐️</span> 7.5
					</div>
					<h3 className="title">Show Title</h3>
				</div>
			</div>
		</Link>
	);
};

export default ShowsItems;
