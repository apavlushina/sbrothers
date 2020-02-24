import React from "react";

export default class AddPost extends React.Component {
  state = {};

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      this.props.createAlbum(this.state.title);
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="list-container">
        <label>
          Berichtnaam:
          <input
            type="text"
            name="berichtnaam"
            placeholder="Geen titel"
            value={this.state.berichtnaam}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Categorie:
          <select
            type="text"
            name="categorie"
            placeholder="Geen categorie"
            value={this.state.categorie}
            onChange={this.handleChange}
            required
          >
            <option></option>
            <option>Tech</option>
            <option>Sports</option>
            <option>Nieuws</option>
          </select>
          >
        </label>
        <label>
          Bericht:
          <input
            type="text"
            name="bericht"
            value={this.state.bericht}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit" className="button">
          Bericht aanmaken
        </button>
      </form>
    );
  }
}
