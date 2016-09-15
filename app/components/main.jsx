var React = require('react');
var Main = (props) => {
    return (
        <div>
            <p>Main.jsx rendered</p>
            {props.children}
        </div>
    )
}
module.exports = Main;