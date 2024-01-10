import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from 'pages/main';
import Layout from 'pages/layout/layout';

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
