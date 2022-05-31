
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Step1 } from './Components/Pages/Step1';
import { Step2 } from './Components/Pages/Step2';

const Step3 = () => <>Step 3</>;
const Result = () => <>Result</>;

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
