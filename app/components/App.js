const React = require('react');
const uuid = require('uuid/v4');

const generateGuids = (n = 10) => ({ guids: Array(n).fill(0).map(() => uuid()).join('\n') });

module.exports = React.createClass({
  getInitialState: generateGuids,
  regenerateGuids: function() { this.setState(generateGuids()); },

  render: function () {
    return (
      <div>
        <div className="form-group row"><pre>{this.state.guids}</pre></div>
        <button onClick={this.regenerateGuids} type="button" className="btn btn-info">Waste More GUIDs!</button>
      </div>
    );
  }
});
