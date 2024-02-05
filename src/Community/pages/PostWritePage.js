/** PostWritePage 글 작성을 진행하는 페이지 */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import usePostCommunity from '../modules/queries/usePostCommunity';
import usePatchCommunity from '../modules/queries/usePatchCommunity';
import {
  initializeAll,
  postWriteSelector,
} from '../../modules/redux/postWrite';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { Title } from '../../containers/common/postInput/Title';
import { FilterBar } from '../../containers/common/postInput/FilterBar';
import { Content } from '../../containers/common/postInput/Content';
import { Image } from '../../containers/common/postInput/Image';
import '../../styles/PageCommon.scss';

const PostWrite = () => {
  const { mutate: post } = usePostCommunity();
  const { mutate: update } = usePatchCommunity();

  const dispatch = useDispatch();

  const isSubmit = useSelector(postWriteSelector('method', 'isSubmit'));
  const postData = useSelector(({ postData }) => postData.postData).data;
  const postwrite = useSelector(({ postwrite }) => postwrite.postWriteSubmit);
  const [inputValue, setInputValue] = useState({
    title: postData.title,
    content: postData.content,
  });
  const [imgFiles, setImgFiles] = useState(
    postData.imageUrl ? postData.imageUrl : [],
  );

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'backPost',
        text: '글쓰기',
        position: 'community',
        isShowBottom: false,
      }),
    );
  }, []);

  const onChange = (event) => {
    const { value, name } = event.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userEmail = localStorage.getItem('email');
    const userName = 'maintest01';
    const { _id, category, field, region } = postwrite;
    const mainCategory = e.target.mainCategory.value;
    const title = e.target.title.value;
    const content = e.target.content.value;
    const imageUrl = imgFiles;
    dispatch(initializeAll());

    const formData = {
      userEmail,
      userName,
      mainCategorys: mainCategory,
      categorys: category,
      fields: field,
      regions: region,
      title,
      content,
      imageUrl,
    };

    if (isSubmit) {
      post(formData);
    } else {
      update({ _id, ...formData });
    }
  };

  return (
    <form
      className="pageContainer"
      id="community"
      onSubmit={onSubmit}
      encType="multipart/form-data"
    >
      <Title name="title" onChange={onChange} inputValue={inputValue.title} />
      <div>
        <FilterBar type={'community'} />
        <Content onChange={onChange} inputValue={inputValue} />
      </div>
      <Image
        imgFiles={imgFiles}
        section="community"
        setImgFiles={setImgFiles}
      />
    </form>
  );
};

export default PostWrite;
