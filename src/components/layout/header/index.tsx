import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { IoIosArrowBack } from 'react-icons/io';
import { CgMenuRightAlt } from 'react-icons/cg';
import { MdOutlineClose } from 'react-icons/md';

import { BackBtn, HeaderWrapper, MenuBtn, MenuWrapper, NavWrapper, Wrapper } from './style';
import { Common } from '../../../commons/style/emotion';
import { MenuListType } from '../../../types/layout/types';

export default function Header(): JSX.Element {
  const params = useLocation();
  const navigate = useNavigate();

  const [path, setPath] = useState<string>('');
  const [isMenu, setIsMen] = useState<boolean>(false);

  const menuList = [
    {
      name: 'todo list',
      route: '',
    },
    {
      name: 'mypage',
      route: 'mypage',
    },
    {
      name: 'login',
      route: 'login',
    },
    {
      name: 'logout',
      route: 'logout',
    },
  ];

  useEffect(() => {
    const prams = params.pathname.indexOf('/');
    setPath(params.pathname.substring(prams + 1));
  }, [params]);

  return (
    <Wrapper>
      {!path ? (
        <HeaderWrapper>
          <h1>TODO LIST</h1>
        </HeaderWrapper>
      ) : (
        <NavWrapper>
          <BackBtn
            onClick={() => {
              navigate('/');
            }}
          >
            <IoIosArrowBack />
          </BackBtn>
          <span>{path}</span>
        </NavWrapper>
      )}
      <MenuBtn
        style={{ color: `${path === '' || isMenu ? `${Common.color.white}` : `${Common.color.default}`}` }}
        onClick={() => {
          setIsMen((prev: boolean) => !prev);
        }}
      >
        {isMenu ? <MdOutlineClose /> : <CgMenuRightAlt />}
      </MenuBtn>
      <MenuWrapper style={{ right: `${isMenu ? '0' : '-100dvw'}` }}>
        {menuList.map((menu: MenuListType) => (
          <li
            onClick={() => {
              navigate(`/${menu.route}`);
              setIsMen((prev: boolean) => !prev);
            }}
            className={path === menu.route ? 'on' : ''}
          >
            <span>{menu.name}</span>
          </li>
        ))}
      </MenuWrapper>
    </Wrapper>
  );
}
