import Link from "next/link";
function Movie({ title, release_date, poster_path }) {
    //const imagePath = "https://image/tmdb.org/t/p/original";
    return (
        <div>
            <h1>{title}</h1>
            <h2> {release_date}</h2>
            <Link href={`/asd`}>
                <img src="" alt={title} />
            </Link>
        </div>
    );
}

export default Movie;
