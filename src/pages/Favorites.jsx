import "../css/Favorites.css"
import { useMovieContext } from "../contexts/movieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const {favorites} = useMovieContext();

    if (favorites && favorites.length > 0) {
        return (
        <div className="favorites">
            <h2>Phim yêu thích của bạn</h2>
            <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div> 
        );
    }
    
    return (
        <div className="favorites-empty">
            <h2>Không có phim yêu thích</h2>
            <p>Thêm phim yêu thích để hiển thị tại đây!</p>
        </div>
    );
}

export default Favorites;