import { Outlet } from 'react-router';

import Header from 'components/layout/header';
import { IPropsLayout } from 'types/layout/types';
import { Wrapper } from './style';

export default function Layout({ children }: IPropsLayout) {
  return (
    <Wrapper>
      <Header />
      <main>{children || <Outlet />}</main>
    </Wrapper>
  );
}
