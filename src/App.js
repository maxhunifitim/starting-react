import "./App.css";

function App() {
  return (
    <div style={{ margin: "auto", width: 800, paddingTop: "1rem" }}>
      <h1 className="title">Pokemon Search</h1>
      <table width="100%">
        <thead>
          <th>Name</th>
          <th>Type</th>
        </thead>
        <tbody>
          <td>Bulbasaur</td>
          <td>Grass, Poison</td>
        </tbody>
      </table>
    </div>
  );
}

export default App;
