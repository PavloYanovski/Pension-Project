// import logo from './logo.svg';
import React, { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

const Login = lazy(() => import('./login/Login'));
const Index = lazy(() => import('./Home/Index'));
// const SignUp = lazy(() => import('./register/Register'))
const Admin = lazy(() => import('./admin/Admin'));
const Members = lazy(() => import('./admin/Member'));
const Beneifts = lazy(() => import('./admin/AddBenefits'));
const Register = lazy(() => import('./register/Register'));
const BeneiftsDetails = lazy(() => import('./employee/BenefitsDetails'));
const PfStatus = lazy(() => import('./employee/PfDetails'));
const Profile = lazy(() => import('./employee/Profile'));
const PensionCalculation = lazy(() => import('./employee/PensionCalculation'));
const CalculatorPage = lazy(() => import('./Home/Calculator'));
const PensionCalc = lazy(() => import('./Home/PensionCalc')); 
const WorkPlacePension = lazy(() => import('./Home/WorkplacePension')); 
function App() {
  return (       
      <div className="App">    
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/calculator_page" element={<CalculatorPage />} /> 
          <Route path="/pension_calc" element={<PensionCalc />} /> 
          <Route path="/work_pension_calc" element={<WorkPlacePension />} /> 
          {/* <Route path="/signup" element={<SignUp />} />   */}
          <Route path="/admin_dashboard" element={<Admin />} /> 
          <Route path="/pf_status" element={<PfStatus />} /> 
          <Route path="/members" element={<Members />} />  
          <Route path="/add_benefits" element={<Beneifts />} /> 
          <Route path="/register" element={<Register />} />    
          <Route path="/dashboard_employee" element={<BeneiftsDetails />} /> 
          <Route path="/Profile"  element={<Profile />} />
          <Route path="/pension_calculation"  element={<PensionCalculation />} />
        </Routes>
      </Suspense>  
      </div>               
  );
}

export default App;
