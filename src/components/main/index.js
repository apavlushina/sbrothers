import React from "react";
import { connect } from "react-redux";
import { getPosts, createPost } from "../../actions/posts";
import PostsList from "./PostsList";
import AddPost from "./AddPost";
import "./index.css";

class MainContainer extends React.PureComponent {
  state = {};

  componentDidMount() {
    this.props.getPosts();
    console.log("cdm?", this.props);
  }

  render() {
    if (!this.props.posts) {
      console.log("props", this.props.posts);
      return <p>Loading...</p>;
    } else {
      console.log("props", this.props.posts);
      return (
        <div className="main-container">
          <AddPost createPost={this.props.createPost} />
          <PostsList posts={this.props.posts} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { getPosts, createPost })(
  MainContainer
);
