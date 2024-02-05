/** ThumbnailInput 게시글의 썸네일 이미지 input을 관리하는 컨테이너 */
import styled from 'styled-components';
import usePostImage from '../../modules/queries/usePostImage';
import useDeleteImage from '../../modules/queries/useDeleteImage';
import { ImgAddSvg } from '../../icon/Activity/ImgAddSvg';
import { X } from '../../icon/X';

export const ThumbnailInput = ({ thumbnail, setThumbnail }) => {
  const { mutateAsync } = usePostImage();
  const { mutate } = useDeleteImage();

  //x 클릭 시 이미지 삭제
  const deleteImgFile = () => {
    mutate({ imageUrl: thumbnail });
    setThumbnail();
  };

  //선택된 이미지를 백엔드에 upload하고 반환된 path값을 thumbnail 저장
  const saveImgFile = async (e) => {
    const files = Array.from(e.target.files);
    const result = await mutateAsync({ section: 'activity', files: files });
    setThumbnail(result.path[0]);
  };

  return (
    <>
      {thumbnail ? (
        <NullImage imgurl={thumbnail}>
          <div className="img" />
          <div className="gradient" />
          <div className="xImg" onClick={deleteImgFile}>
            <X color="#FFFFFF" size={14} bold={2} />
          </div>
        </NullImage>
      ) : (
        <>
          <label htmlFor="upload-thumbnail">
            <NullImage>
              <ImgAddSvg />
            </NullImage>
          </label>
          <input
            style={{ display: 'none' }}
            type="file"
            accept="image/*"
            id="upload-thumbnail"
            name="img"
            onChange={saveImgFile}
          ></input>
        </>
      )}
    </>
  );
};

const NullImage = styled.div`
  position: relative;
  display: flex;
  width: 375px;
  height: 230px;
  background: var(--myspec-gray-scalegray-200, #f2f2f2);
  cursor: pointer;
  & > .img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imgurl }) => `url('${imgurl}')`};
  }
  & > .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    background: linear-gradient(180deg, #000000a9 0%, transparent 100%);
  }
  & > .xImg {
    position: absolute;
    left: 333px;
    top: 12px;
  }
  & > svg {
    padding: 97px 160px 88px 170px;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
  }
`;
