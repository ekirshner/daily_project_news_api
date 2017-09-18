import React, { Component } from 'react';

class NewsStory extends Component {
    render() {
        return (
        <div className="individual-story">
            <h3>{this.props.info.title}</h3>
            <p>{this.props.info.description}</p>
            <a href={this.props.info.url}><img src={this.props.info.urlToImage} alt=""/></a>
        </div>
        )
    }
}

export default NewsStory;