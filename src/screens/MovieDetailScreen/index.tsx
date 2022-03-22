import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Header, Image, Label, List, Loader, Message, Segment } from "semantic-ui-react";
import { MovieDetail } from "../../api/models/movie-detail-model";
import { MovieService } from "../../api/services/movie.service";
import './style.css'

export const MovieDetailScreen = memo(function MovieDetailScreen() {
    const params = useParams<{ id: string }>();

    const [movieModel, setMovieModel] = useState<MovieDetail>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        MovieService.getMovieById(params.id)
            .then((response) => setMovieModel(response))
            .finally(() => setLoading(false))
    }, [params.id])

    return (
        loading ?
            (<Loader active />)
            :
            (
                <Grid columns={2} divided>
                    <Grid.Row >
                        <Grid.Column width={6}>
                            <Image src={`http://image.tmdb.org/t/p/w500/${movieModel?.poster_path}`} />
                        </Grid.Column>
                        <Grid.Column>
                            <Header as={'h1'}>{movieModel?.original_title}</Header>
                            <Segment>
                                <Label as='a' color='blue' ribbon={true}>
                                    Overview
                                </Label>
                                {movieModel?.overview}
                            </Segment>
                            <Segment>
                                <Label as='a' color='blue' ribbon={true}>
                                    Vote
                                </Label>

                                {movieModel?.vote_average}
                            </Segment>
                            <Segment>
                                <Label as='a' color='blue' ribbon={true}>
                                    Production Countries
                                </Label>
                                {movieModel?.production_countries.map((country) => (
                                    <List>
                                        <List.Item>{country.name}</List.Item>

                                    </List>
                                ))}
                            </Segment>
                            <Message size="massive" className="message-content" color="green" inverted>
                                <Message.Header>{movieModel?.status}</Message.Header>
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )
    )
})