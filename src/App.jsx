import "./App.css";

function App() {
  const fName = "Antara";
  const lName = "Roy";
  const year = new Date().getFullYear();
  return (
    <>
      <div>
        <p>Created by {fName + " " + lName}</p>
        <p>Copyright {year}</p>
      </div>
    </>
  );
}

export default App;
