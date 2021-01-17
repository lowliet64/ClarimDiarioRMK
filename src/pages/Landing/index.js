import { React, Component } from 'react'
import Header from '../../components/Header'
import ArticleCard from '../../components/ArticleCard'
import './index.css'

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initial: 'kadu',
            artigos: [],
        }
    }

    repetir() {
        console.log('teste')
    }

    componentDidMount() {
        fetch('http://clarimdiario.herokuapp.com/api/artigos').then(async (response) => {
            const a = await response.json();
            console.log(a.artigos)
            this.setState({ artigos: a.artigos })
        })

    }
    render() {
        return (
            <div>
                <Header />
                <div className="container-context">
                    <div>
                        {this.state.artigos.map(artigo =>
                            <ArticleCard title={artigo.titulo} createTime={artigo.titulo} content={artigo.corpo} />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;