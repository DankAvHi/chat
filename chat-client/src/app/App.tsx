import { Outlet } from "react-router-dom";
import { GlobalStyles } from "./styles";

function App() {
    return (
        <>
            <GlobalStyles />
            <div className="App">
                <nav></nav>
                <Outlet />
            </div>
        </>
    );
}

export default App;
