import logo from './logo.svg';
import './App.css';

function App() {
  const hour = new Date().getHours();

  // Example: map hour to a gradient color
  const getColorByHour = (h) => {
    if (h >= 6 && h < 12) return "#FFD700"; // morning - gold
    if (h >= 12 && h < 18) return "#00BFFF"; // afternoon - deep sky blue
    if (h >= 18 && h < 21) return "#FF4500"; // evening - orange red
    return "#2F4F4F"; // night - dark slate gray
  };

  const startColor = getColorByHour(hour);

  return (
    <>
      <div
        style={{
          minWidth: "100vw",
          minHeight: "100vh",
          background: `linear-gradient(270deg, ${startColor}, #7fffd4, ${startColor})`,
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
  );
}


export default App;
