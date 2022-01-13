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

    this.state = { posts: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const newPost = App.parseForm(event.target);
    const posts = this.state.posts.concat(newPost);

    this.setState({ posts });
    App.resetForm(event.target);
  }

  render() {
    return (
      <div className="App">
        <BlogPosts posts={this.state.posts} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
