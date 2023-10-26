import { Routes, Route } from "react-router-dom";
import { SchoolView, StudentsView, ClassView } from "src/pages";
import { Toaster } from "react-hot-toast";
import { fetchClassesAsync, fetchStudentsAsync } from "features";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClassesAsync());
    dispatch(fetchStudentsAsync());
  }, []);

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
