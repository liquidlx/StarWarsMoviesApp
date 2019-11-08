import React, { Component } from 'react';
import api from '../../services/api'; 
import './styles.css';


export default class Main extends Component {
    
    state = {
        films: [],
    }

    componentDidMount(){
        this.loadFilms().then(this.removeLoader());
    }

    loadFilms = async () => {
        const { data } = await api.get('/films');

        //Films aren't in order so we need to compare de episode_id to sort it
        data.results.sort(function(a, b) {
            return a.episode_id - b.episode_id;
        });

        this.setState({ films: data.results });
    }

    removeLoader = () => {
        let loaderDiv = document.getElementsByClassName('loader')[0];
        loaderDiv.style.animationName = 'fade-out';
        setTimeout(() => {
            loaderDiv.remove();
        }, 1000);
    }

    render(){
        return(
            <div className='movies-list'>
                <div className="loader"></div>
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