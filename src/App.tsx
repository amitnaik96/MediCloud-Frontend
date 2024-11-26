import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors"
import Doctor from "./pages/Doctor"
import Patient from "./pages/Patient"


const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/patients' element={<Patients/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctor/:id' element={<Doctor/>} />
        <Route path='/patient/:id' element={<Patient/>} />
      </Routes>
    </BrowserRouter>  
  </>
}

export default App;