import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Loader from '../../components/Loader';

import './styles.css';

export default class Film extends Component {
    state = {
        loading: true,
        film: {}
    };

    async componentWillMount(){
        let { id } = this.props.match.params;

        id = parseInt(id);

        if(id < 4){
             id += 3;
        }else if(id < 7){
            id -= 3;
        }

        const response = await api.get(`/films/${id}`);

        this.setState({ film: response.data });

        console.log(response.data)
    }

    handleComponentContentLoaded = () => {
        this.setState({ loading: false });
    }

    render() {
        return (
            <div className="filmContainer" onLoad={this.handleComponentContentLoaded.bind(this)}>
                <Loader loading={this.state.loading} />
                <div className='film-info'>
                    <div className='container-info'>
                        <h1>{this.state.film.title}</h1>
                        <p><span>Episode</span> {this.state.film.episode_id}</p>
                        <p><span>Release Date:</span> {this.state.film.release_date}</p>
                        <p><span>Director:</span> {this.state.film.director}</p>
                        <div className='opening-crawl-container'>
                            <p>{this.state.film.opening_crawl}</p>
                        </div>
                        <Link to="/" className='btn-classic'>Films List</Link>
                    </div>
                </div>
                <div className='film-image'>
                    <img src={`/img/${this.state.film.episode_id}.jpg`}/>
                </div>
            </div>
        )
    }
}