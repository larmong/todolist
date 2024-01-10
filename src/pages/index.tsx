import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';

import GlobalStyle from 'commons/style/global.style';
import Main from 'pages/main';
import Layout from 'pages/layout';
import Signup from 'pages/signup';
import Login from 'pages/login';
import MyPage from 'pages/mypage';

export default function Pages(): JSX.Element {
  return (
    <>
      <Global styles={GlobalStyle} />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="login" index element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="mypage" index element={<MyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
