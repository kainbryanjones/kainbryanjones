import logo from './logo.svg';
import './App.css';

function App() {
  const hour = new Date().getHours();

  const getColorByHour = (h) => {
    if (h >= 6 && h < 12) return "#FFD700";
    if (h >= 12 && h < 18) return "#00BFFF";
    if (h >= 18 && h < 21) return "#FF4500";
    return "#2F4F4F";
  };

  const startColor = getColorByHour(hour);
  const isDay = hour >= 6 && hour < 18;

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: isDay ? "#ffffff" : "#000000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "10%",
            height: "10%",
            borderRadius: "10px",
            background: `linear-gradient(270deg, ${startColor}, #7fffd4, ${startColor})`,
            backgroundSize: "600% 600%",
            animation: "gradientAnimation 10s ease infinite"
          }}
        />
      </div>

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
