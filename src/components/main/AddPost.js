import React from "react";
import arrow from "./images/arrow.png";

export default class AddPost extends React.Component {
  state = {
    title: null,
    content: null,
    category: null
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.category) {
      const category_id = this.props.categories.find(
        categorie => categorie.name === this.state.category
      ).id;
      const postData = {
        title: this.state.title,
        content: this.state.content,
        category_id: category_id
      };
      this.props.createPost(postData);
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log("state", this.state);
    return (
      <div className="list-container">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="text-align">
            <label className="label">
              Berichtnaam:
              <br />
              <input
                type="text"
                name="title"
                className="form-input"
                placeholder="Geen titel"
                value={this.state.title}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="label arrowParent">
              Categorie:
              <br />
              <img src={arrow} alt="arrow" className="arrow"></img>
              <select
                type="text"
                name="category"
                className="form-input"
                value={this.state.category}
                onChange={this.handleChange}
                required
              >
                <option value="" defaultValue>
                  Geen categorie
                </option>
                {this.props.categories.map(categorie => {
                  return <option key={categorie.id}>{categorie.name}</option>;
                })}
              </select>
            </label>
            <label className="label">
              Bericht:
              <br />
              <textarea
                maxLength="300"
                name="content"
                value={this.state.content}
                onChange={this.handleChange}
                required
              ></textarea>
            </label>
          </div>
          <button type="submit" className="button">
            Bericht aanmaken
          </button>
        </form>
      </div>
    );
  }
}
