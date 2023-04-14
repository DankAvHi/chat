import { GlobalStyles } from "./styles";
import { Outlet } from "react-router-dom";

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
