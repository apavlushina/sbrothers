import React from "react";
import { connect } from "react-redux";
import { getPosts, createPost } from "../../actions/posts";
import { getCategories } from "../../actions/categories";
import PostsList from "./PostsList";
import AddPost from "./AddPost";
import "./index.css";

class MainContainer extends React.PureComponent {
  state = {};

  componentDidMount() {
    this.props.getPosts();
    this.props.getCategories();
  }

  render() {
    if (!this.props.posts) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="main-container">
          <AddPost
            createPost={this.props.createPost}
            categories={this.props.categories}
          />
          <PostsList posts={this.props.posts} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    categories: state.categories
  };
};

export default connect(mapStateToProps, {
  getPosts,
  createPost,
  getCategories
})(MainContainer);
