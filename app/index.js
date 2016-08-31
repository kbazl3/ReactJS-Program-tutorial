var React = require('react'),
    ReactDom = require('react-dom');

var HelloWorld = React.createClass({
    render: function() {
        return (
            <div> Hello ReactJs Programs!</div>
        )
    }
});

ReactDom.render(
    <HelloWorld />,
    document.getElementById('app')
)
