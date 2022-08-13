import "./App.scss";
import Tree from "react-animated-tree";
import Item from "./components/Item";

const treeStyles = {
  position: "absolute",
  top: 40,
  color: "white",
  fill: "white",
  width: "100%",
};

function App() {
  return (
    <div className="App">
      {/* Main Tree */}
      <Tree content={<Item />} type="description" style={treeStyles}>
        {/* subtree one 1 */}
        <Tree content={<Item />}>
          {/* tree one on subtree 1-1 */}
          <Tree content={<Item />} />
          {/* tree two on subtree  1-2 */}
          <Tree content={<Item />} />
        </Tree>

        {/* subtree two 2 */}
        <Tree content={<Item />}>
          {/* tree one on subtree 1-1 */}
          <Tree content={<Item />} />
        </Tree>

        {/* subtree 2 */}
        <Tree content={<Item />} />
      </Tree>
    </div>
  );
}

export default App;
