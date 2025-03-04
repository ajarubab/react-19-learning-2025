import { createElement } from "react";
function App() {
    return createElement(
        "div",
        { id: "rootDiv" },
        "Hello Div",
        createElement(
            "div",
            { id: "mainDiv" },
            createElement(
                "h1",
                { id: "h1Tag" },
                "Jai Siya Ram"
            )
        ),
        createElement(
            "div",
            { id: "rootDiv" },
            createElement(
                "button",
                { class: "btn1", onClick: () => alert('Radhe Radhe') },
                "Click me"
            )
        )
    )
}

export default App;
