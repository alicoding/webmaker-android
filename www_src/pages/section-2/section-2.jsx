var React = require('react');
var render = require('../../lib/render.jsx');

// TEMP: Change div w. zIndex to Draggable to enable drag
// var Draggable = require('react-draggable');

var Hammer = require('react-hammerjs');
var Grid = require('./grid.jsx');

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  showOverview: function () {
    this.refs.masterGrid.showOverview();
  },
  componentDidMount: function () {
    // Pass container dimensions in once initial render is complete
    //   since container must be measured before tiles can be properly laid out...
    var elWrapper = this.refs.wrapper.getDOMNode();
    this.refs.masterGrid.setContainerDimensions(elWrapper.clientWidth, elWrapper.clientHeight);

    this.refs.masterGrid.showOverview();
  },
  render: function () {
    return (
      <div className="section-2">
        <div ref="wrapper" className="wrapper">
          <div zIndex={100}>
            <div>
              <Grid ref="masterGrid" aspectRatio={"35:40"}/>
            </div>
          </div>
        </div>
        <div className="segmented-control">
          <Hammer component="button" onTap={ this.showOverview }>-</Hammer>
          <Hammer component="button" className="disabled">+</Hammer>
        </div>
      </div>
    );
  }
});

render(App);
