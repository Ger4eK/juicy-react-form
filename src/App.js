import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Result } from './Pages/Result';
import { Step1 } from './Pages/Step1';
import { Step2 } from './Pages/Step2';
import { Step3 } from './Pages/Step3';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Step1 />} />
          <Route path='/step2' element={<Step2 />} />
          <Route path='/step3' element={<Step3 />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
