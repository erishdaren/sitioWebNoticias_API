import React,{Component} from 'react';
import Noticia from './Noticia';


export default class Noticias extends Component {

    render() {
        return (
            <div className="row">
                    {this.props.noticias.map(news => ( 
                        <Noticia 
                            key = {news.url}
                            noticia = {news}
                        
                        />  
                    ))}
            </div>
        );
    }
}