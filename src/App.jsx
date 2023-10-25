import { Routes, Route } from "react-router-dom";
import { SchoolView, StudentsView } from "src/pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SchoolView />} />
        <Route path="/students" element={<StudentsView />} />
      </Routes>
    </>
  );
}

export default App;
