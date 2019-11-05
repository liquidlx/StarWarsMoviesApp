import React, { Component } from 'react';
import api from '../../services/api'; 

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
                    <article>
                        <div className='movie-card-header'>
                            <strong>{film.title}</strong>
                            <p>Episode: {film.episode_id}</p>
                            <p>Release date: {film.release_date}</p>
                        </div>
                        <div></div>
                    </article>
                ))}
            </div>
        )
    }
}