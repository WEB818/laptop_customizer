import React from "react";

class Options extends React.Component {
  updateFeature = (feature, newValue) => {
    // const featureHash = feature + "-" + idx;
    const selected = Object.assign({}, this.state.selected);
    const selectedOption = this.state.selected[feature];
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  optionChoice = () => {
    this.props.features.map(choice => choice);
  };

  render() {
    console.log(this.props.id);
    return (
      <div className="summary__option" key={this.props.id}>
        {/* <div className="summary__option__label">{this.props.feature} </div>
        <div className="summary__option__value">{this.selectedOption}</div> */}
        <input type="readonly" value={this.props.id} name="option"></input>
      </div>
    );
  }
}

export default Options;
