
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutPageLink from './components/AboutPageLink';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {  
    
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route path='/' exact element={
                        <>
                                <FeedbackForm />
                                <FeedbackStats />                
                                <FeedbackList />  
                        </> 
                        }>
                            
                        </Route>
                        <Route path='/about' element={<AboutPage />} />
                        
                    </Routes>   
                    {/* <Card>
                        <NavLink to='/' activeClassName='active'>
                            Home
                        </NavLink>
                        <NavLink to='/about' activeClassName='active'>
                            About
                        </NavLink>
                    </Card> */}
                    <AboutPageLink />     
                </div>
            </Router>
        </FeedbackProvider>
    );
};

export default App;
