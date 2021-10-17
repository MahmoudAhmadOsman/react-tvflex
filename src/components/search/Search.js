import React, { useState } from "react";
import homeBg from "../../assets/images/home-bg.jpg";

const Search = (props) => {
	// Check class sizes
	const styleClasses =
		props.size === "large"
			? "col-2-4 search-content mx-auto mh-100"
			: "col-2-4 search-content mx-auto pt-6 pb-2";

	//UseState for search input - for 2 way binding
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<section className="search" style={{ background: `url(${homeBg})` }}>
			<div className="container">
				<div className="row">
					<div className={styleClasses}>
						{/* This text show only on the homepage */}
						{props.size === "large" ? (
							<div>
								<h1>Find your next show</h1>
								<p>Search in the box your favorite tv show and films!</p>
							</div>
						) : null}

						<form action="" className="search-form">
							<input
								type="search"
								placeholder="Search for shows"
								value={searchTerm}
								onChange={(e) => {
									setSearchTerm(e.target.value);
								}}
							/>
							<button type="submit" className="btn btn-primary">
								Search
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Search;
