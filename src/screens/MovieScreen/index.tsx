import { memo, useEffect, useState } from "react";
import { Movie } from "../../api/models/movie-model";
import { MovieService } from "../../api/services/movie.service";
import { Container, Grid, Loader, Pagination } from "semantic-ui-react";
import { CardComponent } from "../../components/Card";
import { Link } from "react-router-dom";
import './style.css';

export const MovieScreen = memo(function MovieScreen() {
    const [movieModel, setMovieModel] = useState<Movie>(null)
    const [loading, setLoading] = useState(false)
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        setLoading(true)
        MovieService.getMovieList(activePage)
            .then((response) => setMovieModel(response))
            .finally(() => setLoading(false))
    }, [activePage])

    return (
        loading ?
            (
                <Loader active />
            ) : (
                <Grid columns={4}>
                    <Container textAlign="right" className="movie-container">
                        <Pagination onPageChange={(e, { activePage }) => setActivePage(Number(activePage))} defaultActivePage={activePage} totalPages={500} />
                    </Container>
                    <Grid.Row>
                        {
                            movieModel?.results.map((movie) => (
                                <Grid.Column className="card-content">
                                    <Link to={`/${movie.id}`}>
                                        <CardComponent image={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={movie.original_title} />
                                    </Link>
                                </Grid.Column>
                            ))
                        }
                    </Grid.Row>
                </Grid>
            )
    )
}
)
