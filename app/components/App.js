const React = require('react');
const uuid = require('uuid/v4');

const generateGuids = (n = 10) => ({ guids: Array(n).fill(0).map(() => uuid()) });

module.exports = React.createClass({
  getInitialState: generateGuids,
  regenerateGuids: function() { this.setState(generateGuids()); },

  handleCopyToClipboard: function(e, guid) {
    e.preventDefault();
    const ref = this.refs[guid];
    ref.focus();
    ref.select();
    document.execCommand('copy');
  },

  render: function () {
    return (
      <div>
        <button onClick={this.regenerateGuids} type="button" className="btn btn-success">Waste More GUIDs!</button>
        <hr />
        {this.state.guids.map(guid => 
          <div className="form-inline" key={guid}>
            <input type="text" readOnly={true} className="form-control" style={{ margin: '2px', width: '300px' }} value={guid} ref={guid} />
            <button className="btn btn-info" onClick={e => this.handleCopyToClipboard(e, guid)}>Copy</button>
          </div>
        )}
        <hr />
        <pre>{this.state.guids.join('\n')}</pre>
      </div>
    );
  }
});
