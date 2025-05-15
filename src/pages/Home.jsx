import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies =async() => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Không tải được phim...")
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return 
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Không tìm thấy phim..")
        } finally {
            setLoading(false)
        }
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Tìm kiếm phim" 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
                Tìm
            </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
            <div className="loading">Đang tải...</div>
         ) : (
        <div className="movies-grid">
            {movies.map((movie) => 
            (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
         )}
    </div>
}

export default Home;