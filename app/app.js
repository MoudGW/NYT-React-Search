//Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

//We need to include all of the components we're utilizing
//Include the Header, Results, Search, and Article components
var Header = require("./components/Header");
var Results = require("./components/Results");
var Search = require("./components/Search");
var Articles = require("./components/Articles");

ReactDOM.render(
// Here we dump all of the components into a single main-container
// Again, treat them like they are any other HTML elements.
    <div className="main-container">
    <Header />
    <Results />
    <Search />
    <Articles />
</div>, document.getElementById("app"));