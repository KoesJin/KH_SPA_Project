// 고유한 ID를 생성하기 위해 nanoid 불러옴
import { nanoid } from 'nanoid';
// 토스트 알림 기능을 위한 react-toastify에서 toast 함수 불러옴
import { toast } from 'react-toastify';
// 토스트 알림 스타일 적용을 위한 CSS 파일 import
import 'react-toastify/dist/ReactToastify.css';

// 공통으로 사용할 토스트 옵션을 객체로 정의
const defaultOption = {
  position: 'top-right', // 토스트가 오른쪽 상단에 위치
  autoClose: 2500, // 2.5초 뒤 자동으로 닫힘
  hideProgressBar: false, // 진행 바 표시
  closeOnClick: true, // 클릭 시 닫힘
  pauseOnHover: false, // 마우스 올려도 일시정지 안 함
  draggable: false, // 드래그로 이동 불가
  progress: undefined, // 진행률 설정 없음 (기본값 사용)
  theme: 'light', // 밝은 테마 사용
};

// 현재 표시 중인 토스트의 ID를 저장할 변수 (중복 방지 목적)
let activeToastId = null;

// 토스트를 실행하는 함수. msg: 메시지 내용, type: 알림 종류 (success, error, warning)
export const performToast = ({ msg, type }) => {
  // 이미 활성화된 토스트가 있으면 중복 실행 방지
  // toast.isActive(activeToastId) -> 그 ID로 된 토스트 아이디가 현재 화면에 떠 있다면
  // -> toastId가 현재 화면에 표시 중인지 여부를 boolean으로 리턴
  if (activeToastId && toast.isActive(activeToastId)) return;

  // 고유 ID를 새로 생성하여 저장
  activeToastId = nanoid();

  // 토스트 옵션 구성: 공통 옵션에 고유 ID를 포함
  const options = {
    ...defaultOption,
    toastId: activeToastId, // 이 ID를 기반으로 중복 체크
  };

  // type에 따라 다른 스타일의 토스트 출력
  switch (type) {
    case 'error':
      return toast.error(msg, options); // 에러 스타일 토스트 출력
    case 'success':
      return toast.success(msg, options); // 성공 스타일 토스트 출력
    case 'warning':
      return toast.warn(msg, options); // 경고 스타일 토스트 출력
    default:
      return; // 정의된 type이 없으면 아무것도 하지 않음
  }
};
