
const title = 'My First React Element!';
// const title = React.createElement(
//     'h1', 
//     { id: 'main-title', title: 'This is the title'},
//     'My First React Element!'

// );

const desc = 'I just learned how to create a React node and render it into the DOM.';

// const desc = React.createElement(
//     'p',
//     null,
//     "I just learned how to create a React node and render it into the DOM."

// );

const myTitleId = 'main-title';
const name = 'Ethan'

const header = (
    <header>
        <h1 id={myTitleId}>{name}'s First React Element!</h1>
        <p>{ desc }</p>
    </header>
);
// const header = React.createElement(
//     'header',
//     null,
//     title,
//     desc
// );

ReactDOM.render(
    header,
    document.getElementById('root')
);

console.log(title);