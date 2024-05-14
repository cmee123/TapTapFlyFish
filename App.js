import React from 'react';
import HomeScreen from './HomeScreen';
import Header from './Header';
import './styles.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div style={{
    display: "grid",
    gridTemplateRows: "70px calc(100vh - 70px)", // First column for the header, second column for the rest
    height: "100vh",
    width: "100%",
    position: "fixed"
}}>
    <Header style={{ gridColumn: "1" }} /> {/* Header with fixed width */}
        <Routes>
            <Route exact path="/" element={<HomeScreen />} />
        </Routes>
</div>
        </Router>
    );
}
 
export default App;
