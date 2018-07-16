import React, { Component, Fragment } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { PostPage } from './pages/PostPage';
import { AuthorsPage } from './pages/AuthorsPage';
import { AboutPage } from './pages/AboutPage';
import { SinglePost } from './pages/SinglePost';
import { AboutAuthor } from "./pages/AboutAuthor";
import { CreateNewPost } from './pages/CreateNewPost';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/home" component={PostPage} />
          <Route exact path="/authors" component={AuthorsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/posts/:id" component={SinglePost} />
          <Route exact path="/authors/:id" component={AboutAuthor} />
          <Route exact path="/post/new" component={CreateNewPost} />
          <Redirect from='/' to='/home' />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;

