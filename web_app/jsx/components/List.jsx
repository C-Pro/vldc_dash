var React = require("react");
var ListItem = require("./ListItem.jsx");
var HTTP = require("../services/httpservice");

var List = React.createClass({
    getInitialState: function() {
      return {tweets: [{"id_str":"jopa",
                        "text": "Твитьте с тегом #VLDCLITE, ребятушки!",
                        "user": { "name": "VLDC Cat",
                                  "profile_image_url": "https://pbs.twimg.com/profile_images/719335232713920513/-1SchS4a_bigger.jpg"
                                }
                       }]
             };
    },
    componentDidMount: function(){
        this.timer = setInterval(this.get, 10000);
        this.get();
    },
    get: function() {
      HTTP.get("/tweets").then(
        function(tweets) {
            if(tweets) {
                this.setState({tweets: tweets});
            }
        }.bind(this)
      );
            
    },
    render: function() {
        var listItems = this.state.tweets.map(function(tweet) {
            return <ListItem key={tweet.id_str} text={tweet.text} user={tweet.user.name} ava_url={tweet.user.profile_image_url} />;
        });
        return (
            <div className="row">
                <div className="col-sm-12">
                    {listItems}
                </div>
            </div>
            );
    }
});

module.exports = List;
