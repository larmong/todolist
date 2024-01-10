import { Fragment } from 'react';
import { Outlet } from 'react-router';

import Header from 'components/layout/header';
import { IPropsLayout } from './types';

export default function Layout({ children }: IPropsLayout) {
  return (
    <Fragment>
      <Header />
      <main>{children || <Outlet />}</main>
    </Fragment>
  );
}
