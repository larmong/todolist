import { BtnGroup, Modal, ModalText, Wrapper } from './style';
import Button from 'components/button';

export default function DefaultModal(): JSX.Element {
  return (
    <Wrapper>
      <Modal>
        <ModalText>
          <h3>로그아웃 하시겠습니까?</h3>
          <p>서브 텍스트 서브 텍스트 서브 텍스트</p>
          {/*<span>서브 텍스트 서브 텍스트 서브 텍스트</span>*/}
        </ModalText>
        <BtnGroup>
          <Button text="취소" class="line" />
          <Button text="로그아웃" type="logout" />
        </BtnGroup>
      </Modal>
    </Wrapper>
  );
}
