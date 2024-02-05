import ContentContainer from '../container/ContentContainer.js';
import Thumbnail from '../container/Thumbnail.js';
import styled from 'styled-components';
import { useEffect } from 'react';
import { changeBarStatus } from '../../Bar/modules/redux/bar.js';
import { changePostDataField } from '../../modules/redux/postData.js';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useActivity } from '../modules/queries/useGetActivity.js';
import { calculateDday } from '../modules/calculateDday.js';
import { applyFontStyles } from '../../styles/fontStyle.js';
import { Image } from '../container/Image.js';

const DetailContainer = styled.div`
  background-color: var(--myspec-gray-scalegray-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 375px;
  margin: 0px auto;
  padding-bottom: 88px;
  text-align: left;
  ${applyFontStyles({ font: 'body-01' })};

  & > div {
    background-color: white;
  }
`;

const DetailActivityPage = () => {
  const params = useParams();
  const { data } = useActivity({ _id: params._id });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'backMenu',
        text: '활동 정보',
        isShowBottom: false,
        position: 'activity',
      }),
    );
  }, []);

  // '최근 본 활동'으로 등록하기
  useEffect(() => {
    if (data) {
      // recentActivitiesMap 불러오기
      const recentActivitiesMap = new Map(
        JSON.parse(localStorage.getItem('recentActivitiesMap')) || [],
      );

      // 기존 게시글 삭제하기 (중복제거)
      recentActivitiesMap.delete(data._id);

      // 새로운 활동 추가하기
      recentActivitiesMap.set(data._id, {
        title: data.activityName,
        team: data.groupName,
        Dday: calculateDday(data.endedAt),
        views: data.views,
      });

      // 3개 이상이면, 삭제하기
      if (recentActivitiesMap.size > 3) {
        const oldestKey = [...recentActivitiesMap.keys()].shift();
        recentActivitiesMap.delete(oldestKey);
      }

      localStorage.setItem(
        'recentActivitiesMap',
        JSON.stringify([...recentActivitiesMap]),
      );
    }

    dispatch(changePostDataField({ value: data }));
  }, [data]);

  const ContentWithLineBreaks = (content) => {
    const paragraphs = content.split('\\n');
    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  return (
    <DetailContainer>
      {data && (
        <>
          <Thumbnail info={data} />
          <ContentContainer info={data} />
          {data.extraImageUrl.length !== 0 && <Image data={data} />}
          <div style={{ padding: '0px 15px' }}>
            {ContentWithLineBreaks(data.content)}
          </div>
        </>
      )}
    </DetailContainer>
  );
};

export default DetailActivityPage;
