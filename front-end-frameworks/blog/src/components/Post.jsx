import { Component } from 'react';

class Post extends Component {
  render() {
    const { body, date, username, title } = this.props.post;

    return (
      <article>
        <h2><u>{title}</u></h2>
        <div className="post-data">
          <div className="post--data">{date.toDateString()}</div>
          <div className="post--data">By: {username}</div>
        </div>
        <p>{body}</p>
      </article>
    );
  }
}

export default Post;
