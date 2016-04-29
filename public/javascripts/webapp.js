var Dashboard = React.createClass({
    render: function () {
        return (
            <div>
                <h1>This is from React Js</h1>
            </div>
        );
    }
});

$(document).ready(function () {
    ReactDOM.render(
        <Dashboard/>,
        document.getElementById('content')
    );
});