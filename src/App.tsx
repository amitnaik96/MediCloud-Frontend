import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors"
import Doctor from "./pages/Doctor"
import AddDoctor from "./pages/AddDoctor"
import Patient from "./pages/Patient"
import AddPatient from "./pages/AddPatient"
import DoctorCard from "./components/DoctorCard";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/patients' element={<Patients/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctor/:id' element={<Doctor/>} />
        <Route path='/adddoctor' element={<AddDoctor/>} />
        <Route path='/patient/:id' element={<Patient/>} />
        <Route path='/addpatient' element={<AddPatient/>} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>  
  </>
}

export default App;