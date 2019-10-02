import React,{Component} from 'react';
import Header from './components/Header';

export default class Class extends Component {
state = {
  noticias : []
}



  componentDidMount() {
    this.consultarNoticias();
  }
  consultarNoticias = () => {
      //const url = `https://newsapi.org/v2/top-headlines? country = mx & apiKey = 65b0783607704b2ca764074365487cb9`;
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=general&apiKey=65b0783607704b2ca764074365487cb9`;
      fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        this.setState({
          noticias : noticias.articles
        })
      })
  }
    render() {
        return (
            <div className="class-name">
                 <Header titulo = "Sitio Web de Noticias" />
            </div>
        );
    }
}



