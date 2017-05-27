const React = require('react');
const uuid = require('uuid/v4');

module.exports = React.createClass({
  getInitialState: function() {
    return { guids: Array(10).fill(0).map(i => uuid()).join('\n') }
  },

  render: function () {
    return (
      <div className="form-group row">
        <pre>{this.state.guids}</pre>
      </div>
    );
  }
});
