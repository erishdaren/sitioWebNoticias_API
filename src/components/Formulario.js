import React,{Component} from 'react';

export default class Formulario extends Component {

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Noticias por Categoria</h2>
                        <div className="input-field col s12 m8">
                            <select>
                                <option value="general" defaultValue>
                                        General
                                </option>
                                <option value="business" defaultValue>
                                        Negocios
                                </option>
                                <option value="entertainment" defaultValue>
                                        Entretenimiento
                                </option>
                                <option value="health" defaultValue>
                                        Salud
                                </option>
                                <option value="sports" defaultValue>
                                        Deportes
                                </option>
                                <option value="science" defaultValue>
                                        Ciencia
                                </option>
                                <option value="technology" defaultValue>
                                        Tecnología
                                </option>
                            </select>
                        </div>
                        <div className="input-field col s12 m4 enviar">
                            <input  type="submit" className="btn amber darken-2" value="Buscar"/>
                        </div>
                    </form>
                </div>   
            </div>
        );
    }
}