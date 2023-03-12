import { Route, Routes } from 'react-router-dom';
import Header from './PageConstantComponent/Header';
import UserLoginPage from './PageContentComponent/UserLoginPage';

function App() {
  return (
    <div>
      <Header/>
      <div className='container-fluid'>
        <Routes>
          <Route exact path='/' element={<UserLoginPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
