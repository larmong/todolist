import { ReactElement } from 'react';

export interface IPropsLayout {
  children?: ReactElement;
}

export interface IPropsHeaderStyle {
  path?: string;
  isMenu?: boolean;
}

export interface MenuListType {
  name: string;
  route: string;
}
