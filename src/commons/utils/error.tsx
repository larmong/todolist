// 서버 에러 메세지
export const serverErrorMessage = (code: string) => {
  let message;

  switch (code) {
    case 'ERROR_CODE_01':
      message = ' 몽고 Object Id Validate 실패하였습니다.';
      break;
    case 'ERROR_CODE_02':
      message = '이미 가입된 이메일 주소입니다.';
      break;
    case 'ERROR_CODE_03':
      message = '사용자 정보가 없습니다.';
      break;
    case 'ERROR_CODE_04':
      message = '기존 비밀번호가 일치하지 않습니다.';
      break;
    case 'ERROR_CODE_05':
      message = 'TODO 정보를 찾을 수 없습니다.';
      break;
    case 'ERROR_CODE_06':
      message = '비밀번호 5회 오류입니다. 관리자에게 문의 부탁드립니다.';
      break;
    case 'ERROR_CODE_07':
      message =
        'TODO LIST 검색에 오류가 있습니다. 관리자에게 문의 부탁드립니다.';
      break;
    case 'ERROR_SERVER':
      message = '오류가 발생하였습니다. 관리자에게 문의 부탁드립니다.';
      break;
    default:
      message = '에러가 발생했습니다.';
  }

  return `${code} :: ${message}`;
};
