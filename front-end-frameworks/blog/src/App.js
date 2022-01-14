import { Component } from 'react';
import './App.css';
import BlogPosts from './components/BlogPosts';
import Form from './components/Form';

class App extends Component {
  static parseForm(form) {
    return {
      body: form.body.value,
      date: new Date(),
      title: form.title.value,
      username: form.username.value
    };
  }

  static resetForm(form) {
    form.body.value = '';
    form.title.value = '';
    form.username.value = '';
  }

  constructor(props) {
    super(props);

    this.state = {
      isBlogPostsVisible: false,
      isFormVisible: true,
      posts: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const newPost = App.parseForm(event.target);
    const posts = this.state.posts.concat(newPost);

    this.setState({ posts });
    App.resetForm(event.target);
  };

  toggleView = () => {
    this.setState({
      isBlogPostsVisible: !this.state.isBlogPostsVisible,
      isFormVisible: !this.state.isFormVisible
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isBlogPostsVisible ? (
          <BlogPosts posts={this.state.posts} toggleView={this.toggleView} />
        ) : null}
        {this.state.isFormVisible ? (
          <Form handleSubmit={this.handleSubmit} toggleView={this.toggleView} />
        ) : null}
      </div>
    );
  }
}

export default App;
