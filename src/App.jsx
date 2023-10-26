import { Routes, Route } from "react-router-dom";
import { SchoolView, StudentsView, ClassView } from "src/pages";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<SchoolView />} />
        <Route path="/classes" element={<ClassView />} />
        <Route path="/students" element={<StudentsView />} />
      </Routes>
    </>
  );
}

export default App;
