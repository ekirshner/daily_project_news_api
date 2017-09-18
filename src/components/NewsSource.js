import React, { Component } from 'react';
import NewsStory from './NewsStory';

class NewsSource extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stories: []
        };
    }

    loadStories() {
        fetch("https://newsapi.org/v1/articles?source=" + this.props.from + "&sortBy=top&apiKey=44ee69c9022d4d09a061bbe23d515896")
            .then(resp => resp.json()) 
            .then(foundStories => {
                this.setState ({
                    stories: foundStories.articles,
                });
            });
    }

    componentDidMount() {
        this.loadStories();
    }

    render() {
        console.log(this.state.stories);
        let finalArr = [];

        for (let i = 0; i < this.state.stories.length; i++) {
            finalArr.push(
                <NewsStory info={this.state.stories[i]} key={i} />
            )     
        }

        return (
            <div className="newsStories">
                {finalArr}
            </div>
        )
    }
}

export default NewsSource;