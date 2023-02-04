import './App.css';
import { Route, Routes } from 'react-router-dom'
import CurrentWorkout from './Routes/currentWorkout';


export default function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<CurrentWorkout />} />
      </Routes>
    </main>
  );
}