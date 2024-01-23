import { BtnGroup, Modal, ModalText, Wrapper } from './style';
import { modalActions } from 'store/slice/modal';
import { useAppDispatch } from 'store/hooks';
import Button from 'components/button';

export default function DefaultModal(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCheckEmail = (type?: string) => () => {
    if (type === 'logout') {
      // TODO: 로그아웃
    }

    dispatch(modalActions.update(false));
  };

  return (
    <Wrapper>
      <Modal>
        <ModalText>
          <h3>로그아웃 하시겠습니까?</h3>
          <p>서브 텍스트 서브 텍스트 서브 텍스트</p>
          {/*<span>서브 텍스트 서브 텍스트 서브 텍스트</span>*/}
        </ModalText>
        <BtnGroup>
          <Button text="취소" class="line" onClickBtn={handleCheckEmail} />
          <Button text="로그아웃" type="logout" onClickBtn={handleCheckEmail('logout')} />
        </BtnGroup>
      </Modal>
    </Wrapper>
  );
}
