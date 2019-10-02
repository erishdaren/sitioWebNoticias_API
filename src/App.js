import React,{Component} from 'react';
import Header from './components/Header';
import Noticias from './components/Noticias';
import Formulario from './components/Formulario';

export default class App extends Component {
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
  //inicio el JSX
    render() {
        return (
            <div className="contenedor-app">
                 <Header 
                      titulo = "Sitio Web de Noticias" 
                  />
                 <div className="container white contenedor-noticias">
                      <Formulario />
                      <Noticias 
                          noticias= {this.state.noticias}
                      />
                 </div>
            </div>
        );
    }
}



