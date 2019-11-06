import React, { Component } from 'react';
import api from '../../services/api'; 
import './styles.css';

export default class Main extends Component {
    state = {
        films: [],
    }

    componentDidMount(){
        this.loadFilms();
    }

    loadFilms = async () => {
        const response = await api.get('/films');

        this.setState({ films: response.data.results });
        
    }

    render(){
        return(
            <div className='movies-list'>
                {this.state.films.map(film => (
                    <article key={film.episode_id}>
                        <div className='movie-card-header'>
                            <img src={require(`../../img/${film.episode_id}.jpg`)}/>
                        </div>
                        <div className='movie-card-info'>
                            <strong>{film.title}</strong>
                            <p>Episode: {film.episode_id}</p>
                            <p>Release date: {film.release_date}</p>
                        </div>
                    </article>
                ))}
            </div>
        )
    }
}