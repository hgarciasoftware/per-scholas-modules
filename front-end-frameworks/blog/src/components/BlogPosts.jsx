import { Component } from 'react';
import Post from './Post';

class BlogPosts extends Component {
  render() {
    const posts = this.props.posts.map((post, index) => <Post post={post} key={index} />);
    const noPosts = <span>No posts to show.</span>;

    return (
      <div className="box">
        {this.props.posts.length !== 0 ? posts : noPosts}
      </div>
    );
  }
}

export default BlogPosts;
