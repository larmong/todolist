import { Wrapper } from './style';
import { IPropsButton } from 'types/components/button/types';
import { modalActions } from 'store/slice/modal';
import { useAppDispatch } from 'store/hooks';

export default function Button(props: IPropsButton): JSX.Element {
  const dispatch = useAppDispatch();

  const onClickBtn = () => {
    if (props.type === 'logout') {
      // TODO: 로그아웃
    }

    dispatch(modalActions.update(false));
  };

  return (
    <Wrapper className={props.class} onClick={onClickBtn}>
      {!props.text ? '확인' : props.text}
    </Wrapper>
  );
}
