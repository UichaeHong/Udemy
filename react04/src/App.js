import Counter from "./components/count";
import Timer from "./components/timer";
import Length from "./components/textlength";
import Timer2 from "./components/timer2";
import CountReducer from "./components/CountReducer";
import ThemeSwitcher from "./components/themeReducer";

function App() {
  return (
    <div className="App">
      <div>
        {/* <Counter />
        <Timer />
        <Length /> */}
        {/* <Timer2 />
        <CountReducer /> */}
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default App;
