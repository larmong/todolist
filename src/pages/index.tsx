import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';

import GlobalStyle from 'commons/style/global.style';
import Main from 'pages/main';
import Layout from 'pages/layout/layout';
import Signup from 'pages/signup';

export default function Pages(): JSX.Element {
  return (
    <BrowserRouter>
      <Global styles={GlobalStyle} />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="signup" element={<Signup />} />
          <Route index element={<Main />} />
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
