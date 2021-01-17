import { React, Component } from 'react';
import './styles/articleCard.css'


class ArticleCard extends Component {

    render() {
        return (
            <div className="article-mini-card">
                <h4>{this.props.title}</h4>
                <small>{this.props.createTime}</small>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default ArticleCard;