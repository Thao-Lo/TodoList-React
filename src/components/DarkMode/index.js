import { useState } from "react";
import styled from 'styled-components';

const Heading = styled.h1`
text-decoration: underline;
`



function DarkModeApp() {
    return (
        <Heading>
             This is an App run on Dark Mode
        </Heading>
    )

}
function LightModeApp() {
    return <h1>
        This is an App run on Light Mode
    </h1>
}

function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return <div>
        <div>DarkMode: {darkMode ? "ON" : "OFF"} </div>
        <button onClick={handleDarkMode}>Switch to {`${!darkMode ? "Dark Mode" : "Light Mode"}`}</button>
        <div>
            {darkMode ? <DarkModeApp /> : <LightModeApp />}
        </div>
    </div>

}
export default DarkMode;