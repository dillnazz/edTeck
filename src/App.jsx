import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import AppRoutes from "./routes/AppRoutes.jsx";

const App = () => {
    return (
       <Router>
           <AppRoutes/>
       </Router>
    );
};

export default App;