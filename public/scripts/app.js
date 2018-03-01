'use strict';

console.log("app.js is running");

app = {
    title: 'Indecision App',
    subtitle: 'This is my subtitle'
};
// JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'app.title'
    ),
    React.createElement(
        'p',
        null,
        'app.subtitle'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

user = {
    name: 'Andrew',
    age: 26,
    location: 'New York'
};
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
