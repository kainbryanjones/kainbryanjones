import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
      <div
        style={{
          minWidth: "100vw",
          minHeight: "100vh",
          background: "linear-gradient(270deg, #7fffd4, #40e0d0, #7fffd4)",
          backgroundSize: "600% 600%",
          animation: "gradientAnimation 10s ease infinite",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      />
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </>
  </div>
  );
}

export default App;
