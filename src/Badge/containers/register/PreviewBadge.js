import { Explain, TitleBox } from '../../../styles/Survey';
import '../../../styles/PageCommon.scss';
import DetailBadgePage from '../../pages/DetailBadgePage';

const PreviewBadge = () => {
  return (
    <>
      <div style={{ position: 'absolute', left: '16px' }}>
        <div>
          <TitleBox>
            발급할 뱃지의 미리보기예요
            <Explain>
              스크롤을 내려 입력하신 정보를 최종적으로 확인해 주세요
              <br />
              뱃지를 발급한 이후에는 임의 수정이 불가능해요
            </Explain>
          </TitleBox>
        </div>
        <DetailBadgePage isPreview={true} />
      </div>
    </>
  );
};

export default PreviewBadge;
