import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Table from "./components/Table";
import Table1 from "./components/Table1";
import "./App.css";
// ("./components/AppName.jsx");
function App() {
  return (
    <center className="to-do-container">
      <AppName />
      <AddTodo />
      <div className="item-container">
        <Table />
        <Table1 />
      </div>
    </center>
  );
}

export default App;
