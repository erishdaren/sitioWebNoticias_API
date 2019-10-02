import React,{Component} from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default class Noticias extends Component {

    render() {
        return (
            <div className="row">
                <TransitionGroup>
                        {this.props.noticias.map(news => (  
                            <CSSTransition  
                                        key = {news.url}
                                        classNames="fade"
                                        timeout={500}
                            >
                                <Noticia 
                                        noticia = {news}                
                                />                   
                            </CSSTransition>
                                ))}
                </TransitionGroup>
            </div>
        )
    }
}
Noticias.propTypes = {
    noticias : PropTypes.array.isRequired
}