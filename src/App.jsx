import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./style";
import { Navbar, Footer } from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Register, Example, Home, About, TechnicalCommittee, CenterManagement, Login, Dashboard, Structures, Committees, Tools, Settings, Partners, Pages, CreateStructure } from "./pages";
import ProtectedRoute from "./security/protectedRoute";

const App = () => (
  <BrowserRouter>
    <div className="bg-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-green-800`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/technical-committee" element={<TechnicalCommittee />} />
            <Route path="/resource-center-management" element={<CenterManagement />} />
            <Route path="/example" element={<Example />} />

            {/* Dynamic */}
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />

            {/* Protected */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage/structures"
              element={
                <ProtectedRoute>
                  <Structures />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage/structures/create"
              element={
                <ProtectedRoute>
                  <CreateStructure />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage/committees"
              element={
                <ProtectedRoute>
                  <Committees />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage/tools"
              element={
                <ProtectedRoute>
                  <Tools />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage/partners"
              element={
                <ProtectedRoute>
                  <Partners />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage/pages"
              element={
                <ProtectedRoute>
                  <Pages />
                </ProtectedRoute>
              }
            />
          </Routes>
          {/* Toast */}
          <ToastContainer />
          
        </div>
      </div>

      <div className="bg-green-800">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>

    </div>
  </BrowserRouter>
);

export default App;
