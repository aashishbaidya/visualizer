import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import FabButtons from "../components/fabButtons/app"



const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
class EditDashboardContents extends React.Component {
  static defaultProps = {
    className: "layout",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100
  };

  constructor(props) {
    super(props);

    this.state = {
      fabbuttons: [{name:'pie', text:'Pie Chart', icon:'fas fa-chart-pie'}, {name:'Chart', text:'Image', icon:'far fa-image'}],
      items: [0, 1, 2, 3, 4].map(function(i, key, list) {
        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 2,
          h: 1,
          aasis: "aashish",
        };
      } 
      )
      , newCounter : 0,
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.savelayout = this.savelayout.bind(this);
    // this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }


  createElement(el) {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };
    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el}>
        
          <span className="text">{i}</span>
        <span
          className="remove"
          style={removeStyle}
          onClick={this.onRemoveItem.bind(this, i)}
        >
          x
        </span>
      </div>
    );
  }

  onAddItem() {
    /*eslint no-console: 0*/
    console.log("adding", "n" + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: "n" + this.state.newCounter.toString(),
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
    // var arr = this.state.items
    // var index = arr.findIndex(item => item.i === "0");
    // arr[index].y = "Infinity";
    // this.setState({items:arr});
  }

  // We're using the cols coming back from this to calculate where to add new items.
  // onBreakpointChange(breakpoint, cols) {
  //   this.setState({
  //     breakpoint: breakpoint,
  //     cols: cols
  //   });
  // }


  updateGridState(newlayout) {
    console.log(this.state);
  }

  savelayout(layout, before, after) {
   
     var arr = this.state.items;
      layout.forEach(function (value) {
      
      var index = arr.findIndex(item => item.i === value.i);
      
      if (index > 0){
      arr[index]['h'] = value['h'];
      arr[index]['w'] = value['w'];
      arr[index]['x'] = value['x'];
      arr[index]['y'] = value['y'];
      console.log(value.i, value['x'], value['y'])
      console.log(arr[index].i, arr[index]['x'], arr[index]['y'])
      }
      })
      this.setState({ items:arr });
      console.log(JSON.stringify(this.state.items));
  }

  onRemoveItem(i) {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i: i }) });
  }

  render() {
    return (
      <div>
        <ResponsiveReactGridLayout
          onDragStop = {this.savelayout}
          onResizeStop = {this.savelayout}
          // onBreakpointChange={this.onBreakpointChange}
          >
          {_.map(this.state.items, el => this.createElement(el))} 
        </ResponsiveReactGridLayout>
        <FabButtons buttons={this.state.fabbuttons} createnew={this.onAddItem}/>
        
      </div>
    );
  }
}

export default EditDashboardContents;

