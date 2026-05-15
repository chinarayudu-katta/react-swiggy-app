    const heading = React.createElement( "div", {id: "parent"},
        React.createElement(
         "div",
         {id: "child"},
         [React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h3", {}, "I am an h3 tag")]   
        )
        );

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
