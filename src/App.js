import Container from "./components/Container/Container";
import { WeatherProvider } from "./Context/WeatherContex";

function App() {
  return (
    <WeatherProvider>
      <Container />
    </WeatherProvider>
  );
}

export default App;
