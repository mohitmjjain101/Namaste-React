const heading = React.createElement(
  "h1",
  { id: "heading", className: "head" },
  `hello world from React`,
  React.createElement("p1", {}, "Hello from paragraph")
);
// const para = React.createElement("p1", {}, "Hello from paragraph")
const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading)
// root.render(heading)

/**
 *
 * <div id="parent">
 *  <div id="child">
 *      <h1> I am h1 tag</h1>
 *  </div>
 * </div>
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("p1", {}, "I am para"),
  ])
);

root.render(parent);
console.log(parent);
