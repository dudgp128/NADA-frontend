/** SetButtonActive 커뮤니티 글 수정을 위해 postWritePage로 넘어가기 전 필요한 세팅을 하는 컨테이너 */
import { useDispatch, useSelector } from 'react-redux';
import { setSubmit, changeField } from '../redux/postWrite';

const useSetButtonActive = () => {
  const dispatch = useDispatch();
  const postData = useSelector(({ postData }) => postData.postData.data);

  const setButtonActive = () => {
    //수정할 게시글의 데이터를 postWrite status 중 submit 값으로 보내줌
    dispatch(setSubmit({ value: postData }));
    dispatch(changeField({ form: 'method', key: 'isSubmit', value: false }));
    //postWrite의 필터 버튼의 상태값을 지정하기 위해 활설/비활성 상태를 알아냄
    const valueRegion = !(postData.region[0] === '전국');
    const valueField = !(postData.field[0] === '전체');
    const valueCategory = !(postData.category === '전체');

    //postWrite의 필터 버튼 상태값을 지정
    dispatch(
      changeField({
        form: 'ButtonActive',
        key: 'mainCategory',
        value: true,
      }),
    );
    dispatch(
      changeField({
        form: 'ButtonActive',
        key: 'region',
        value: valueRegion,
      }),
    );
    dispatch(
      changeField({
        form: 'ButtonActive',
        key: 'field',
        value: valueField,
      }),
    );
    dispatch(
      changeField({
        form: 'ButtonActive',
        key: 'category',
        value: valueCategory,
      }),
    );
  };

  return setButtonActive;
};

export default useSetButtonActive;
