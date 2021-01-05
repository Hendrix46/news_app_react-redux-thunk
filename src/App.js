import React, {Component} from 'react';
import './App.css';
import Posts from "./components/posts";
import {connect} from "react-redux";
import {getTopHeadlines} from "./actions/PostsActions";

class App extends Component{
    componentDidMount() {
        this.props.getTopHeadlines();
    }
    render() {

        const {loading, news}=this.props;
        console.log(loading);
        console.log(news);
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Важные Новости</h1>
                </header>
                <Posts load={loading} posts={news}/>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    news: state.posts.news,
    loading: state.posts.load

});

export default connect(mapStateToProps, {getTopHeadlines})(App);
