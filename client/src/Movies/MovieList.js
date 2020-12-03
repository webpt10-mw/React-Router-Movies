import React from "react";
import { Movie } from "./Movie";

// const movies = movies();

export default function MovieList(props) {
	console.log("props", props);
	// console.log("movies", props.movies());
	console.log("This is 'movies'", Movie);
	return (
		<div className="movie-list">
			{/* //? Why is 'movies' undefined? */}
			{/* {props.movies.map((movie) => (
				<MovieDetails key={movie.id} movie={movie} />
			))} */}
		</div>
	);
}

function MovieDetails(props) {
	const { title, director, metascore } = props.movie;

	return (
		<div className="movie-card">
			<h2>{title}</h2>
			<div className="movie-director">
				Director: <em>{director}</em>
			</div>
			<div className="movie-metascore">
				Metascore: <strong>{metascore}</strong>
			</div>
		</div>
	);
}
