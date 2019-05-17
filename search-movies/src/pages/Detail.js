import React, { Component } from 'react';
import PropTypes from 'prop-types'

const API_KEY = 'dc29d631';

export class Detail extends Component {

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }

    _fechMovie({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log(movie)
                this.setState({ movie })
            })
    }

    _goBack () {
        window.history.back();
    }

    componentDidMount () {
        const { id } = this.props.match.params
        this._fechMovie({ id })
    }

    render () {

        const { Title, Poster, Actors, Matascore, Plot } = this.state.movie

        return (
            <div>
                <button onClick={ this._goBack }>Volver</button>
                <h1>{ Title }</h1>
                <img src={ Poster }></img>
                <h3>{ Actors }</h3>
                <span>{ Matascore }</span>
                <p>{ Plot }</p>
            </div>
        )
    }
}