var React = require('react');

module.exports = React.createClass({
  processCollections: function () {
    var collection = {};
    for (var col in this.props.collection){
      collection[col] = new this.props.collection[col]();
    }
    return collection;
  },
  render: function () {
    return (
      <div>
        {(this.props.component) && <this.props.component collection={this.processCollections()}/>}
      </div>
    );
  }
});
