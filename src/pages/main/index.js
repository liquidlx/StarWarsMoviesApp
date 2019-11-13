import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'; 
import Loader from '../../components/Loader';
import './styles.css';


export default class Main extends Component {
    
    state = {
        loading: true,
        films: [],
    }

    componentWillMount() {
        this.loadFilms();
    }

    loadFilms = async () => {
        const { data } = await api.get('/films');

        //Films aren't in order so we need to compare de episode_id to sort it
        data.results.sort(function(a, b) {
            return a.episode_id - b.episode_id;
        });

        this.setState({ films: data.results });
    }
    
    handleComponentContentLoaded = () => {
        this.setState({ loading: false });
    }

    render(){
            return(
                <div className='movies-list' onLoad={this.handleComponentContentLoaded.bind(this)}>
                    <Loader loading={this.state.loading} />
                    {this.state.films.map(film => (
                        <article key={film.episode_id}>
                            <Link to={`/film/${film.episode_id}`}>
                                <div className='movie-card-header'>
                                    <img src={`/img/${film.episode_id}.jpg`}/>
                                </div>
                                <div className='movie-card-info'>
                                    <strong>{film.title}</strong>
                                    <p>Episode: {film.episode_id}</p>
                                    <p>Release date: {film.release_date}</p>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            )
    }
}