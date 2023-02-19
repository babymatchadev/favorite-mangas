import { manga } from "./mangasData"
import "./MangaTile.css"

export const MangaTile = ({
	title,
	author,
	description,
	image,
	toms,
}: manga) => {
	return (
		<div className="tile">
			<img src={image} />
			<section className="tile-info">
				<h1>{title}</h1>
				<p>{description}</p>
				<span>Author: {author}</span>
				<span>Volumes: {toms}</span>
			</section>
		</div>
	)
}
