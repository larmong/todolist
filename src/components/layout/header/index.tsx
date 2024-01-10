import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { IoIosArrowBack } from 'react-icons/io';
import { CgMenuRightAlt } from 'react-icons/cg';
import { MdOutlineClose } from 'react-icons/md';

import { BackBtn, HeaderWrapper, MenuBtn, MenuWrapper, NavWrapper, Wrapper } from './style';

export default function Header(): JSX.Element {
  const params = useLocation();
  const navigate = useNavigate();

  const [path, setPath] = useState<string>();
  const [isMenu, setIsMen] = useState<boolean>(false);

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
              navigate(-1);
            }}
          >
            <IoIosArrowBack />
          </BackBtn>
          <span>{path}</span>
        </NavWrapper>
      )}
      <MenuBtn
        onClick={() => {
          setIsMen((prev: boolean) => !prev);
        }}
      >
        {isMenu ? <MdOutlineClose /> : <CgMenuRightAlt />}
      </MenuBtn>
      <MenuWrapper style={{ right: `${isMenu ? '0' : '-100dvw'}` }}>ddd</MenuWrapper>
    </Wrapper>
  );
}
