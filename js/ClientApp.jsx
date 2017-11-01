const MyTitle = function(props) {
  return (
    // Null is where you can pass in attributes to the element. Can be {} or null. For example {my-first-component}
    //JSX does the createElement for us.
    //Can also set ce = React.createElement to shorten code.
    React.createElement("div", null, React.createElement("h1", { style: { color: props.color } }, props.title))
  );
};

const MyFirstComponent = function() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "This is my first component!"),
    React.createElement(MyTitle, { title: "Rick and Morty", color: "YellowGreen" }),
    React.createElement(MyTitle, { title: "DragonBall Super", color: "GreenYellow" }),
    React.createElement(MyTitle, { title: "Mr Robot", color: "Red" }),
    React.createElement(MyTitle, { title: "The Walking Dead", color: "AquaMarine" }),
    React.createElement(MyTitle, { title: "Boruto", color: "Peru" })
  );
};

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById("app"));
