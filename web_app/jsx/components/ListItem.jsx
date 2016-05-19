var React = require("react");

var ListItem = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-sm-1">
                    <img src={this.props.ava_url} height="48px" width="48px"/>
                </div>
                <div className="col-sm-11">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4>{this.props.user}</h4>
                         </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>{this.props.text}</p>
                        </div>
                    </div>
                </div>               
                
            </div>
            );
    }
});

module.exports = ListItem;
