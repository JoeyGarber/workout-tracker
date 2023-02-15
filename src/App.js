import './App.css';
import { Route, Routes } from 'react-router-dom'
import StartWorkout from './Routes/startWorkout';
import CreateWorkout from './Routes/createWorkout';
import BuildWorkout from './Routes/buildWorkout';
import CreateExercise from './Routes/createExercise';

export default function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<StartWorkout />} />
        <Route exact path='/buildWorkout' element={<CreateWorkout />} />
        <Route path='/buildWorkout/:id' element={<BuildWorkout />} />
        <Route path='/createExercise' element={<CreateExercise />} />
      </Routes>
    </main>
  );
}