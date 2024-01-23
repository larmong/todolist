import { IPropsButton } from 'types/components/button/types';
import { Wrapper } from './style';

export default function Button(props: IPropsButton): JSX.Element {
  return (
    <Wrapper className={props.class} onClick={props.onClickBtn}>
      {!props.text ? '확인' : props.text}
    </Wrapper>
  );
}
