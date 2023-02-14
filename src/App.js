import './App.css';
import { Route, Routes } from 'react-router-dom'
import StartWorkout from './Routes/startWorkout';
import BuildWorkout from './Routes/buildWorkout';

export default function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<StartWorkout />} />
        <Route path='/buildWorkout' element={<BuildWorkout />} />
      </Routes>
    </main>
  );
}