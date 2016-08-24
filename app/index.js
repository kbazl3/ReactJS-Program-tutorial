var React = require('react'),
    ReactDom = require('react-dom');

var HelloWorld = React.createClass({
    render: function() {
        return (
            <div> Hello ReactJs Program!</div>
        )
    }
});

ReactDom.render(
    <HelloWorld />,
    document.getElementById('app')
)
