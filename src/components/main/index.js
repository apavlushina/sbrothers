import React from "react";
import { connect } from "react-redux";
import { getPosts, createPost } from "../../actions/posts";
import "./index.css";

class MainContainer extends React.PureComponent {
  state = {};

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    if (!this.props.posts) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          Test
          {/* <AddPost createPost={this.props.createPost} />
          <PostsList albums={this.props.posts} /> */}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: state.props
  };
};

export default connect(mapStateToProps, { getPosts, createPost })(
  MainContainer
);
