import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobPostingList from './components/JobPostingList';

function App() {
  return (
    // <div>Hello</div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<JobPostingList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
