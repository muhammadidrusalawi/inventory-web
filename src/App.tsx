import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from '@/pages/Welcome.tsx';
import Login from '@/pages/auth/Login.tsx';
import Register from '@/pages/auth/Register.tsx';
import CreateStore from '@/pages/stores/Onboarding.tsx';
import Dashboard from '@/pages/dashboard/Dashboard.tsx';
import NotFound from '@/pages/NotFound.tsx';

function App() {
  const tenantId = '5e4c8d5a-cfd8-4644-83bf-59131c9efff7';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/auth/sign-in" element={<Login />} />
        <Route path="/auth/sign-up" element={<Register />} />

        <Route path="/stores/onboarding" element={<CreateStore />} />

        <Route path="/dashboard" element={<Navigate to={`/dashboard/${tenantId}`} replace />} />
        <Route path="/dashboard/:tenantId" element={<Dashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
