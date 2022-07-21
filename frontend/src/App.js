import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";

import MyPage from "./pages/MyPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/my-page" element={<MyPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
