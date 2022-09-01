import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages 
import ComingSoon from './pages/ComingSoon';


// Css Import
import './assets/scss/app.scss';


const App = () => {
  return (
    <Router>
		<ScrollToTop>
			<Routes>
				<Route path={process.env.PUBLIC_URL + "/"} element={<ComingSoon />}/>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</ScrollToTop>
    </Router>
	
  )
}

export default App;
