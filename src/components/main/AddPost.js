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
      <div className="list-container">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="text-align">
            <label className="label">
              Berichtnaam:
              <br />
              <input
                type="text"
                name="berichtnaam"
                className="form-input"
                placeholder="Geen titel"
                value={this.state.berichtnaam}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="label">
              Categorie:
              <br />
              <select
                type="text"
                name="categorie"
                className="form-input form-select"
                value={this.state.categorie}
                onChange={this.handleChange}
                required
              >
                <option value="" selected>
                  Geen categorie
                </option>
                <option>Tech</option>
                <option>Sports</option>
                <option>Nieuws</option>
              </select>
            </label>
            <label className="label">
              Bericht:
              <br />
              <textarea
                maxLength="300"
                name="bericht"
                value={this.state.bericht}
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
