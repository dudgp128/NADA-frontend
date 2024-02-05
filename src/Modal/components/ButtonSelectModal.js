/**buttonSelectModal 여러 라운드 버튼 중 선택을 하는 형태인 모달 */
import { useEffect } from 'react';
import useModal from '../modules/useModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeForm,
  submitForm,
  postWriteSelector,
  changeField,
} from '../../modules/redux/postWrite';
import { SelectButton } from '../../Community/components/PostWrite/SelectButton';
import { SelectAllButton } from '../../Community/components/PostWrite/SelectAllButton';
import { List, Border } from '../styles/ModalStyle';
import BottomButton from './usedInModal/BottomButton';
import {
  selectConfig,
  selectAllConfig,
} from '../../modules/common/AttributeData';

const ButtonSelectModal = () => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const modal = useSelector(({ modal }) => modal);
  const { contentType } = modal;
  const Initialization = useSelector(
    postWriteSelector('postWriteSubmit', contentType),
  );
  const mainCategory = useSelector(
    postWriteSelector('postWriteSubmit', 'mainCategory'),
  );
  const status = useSelector(postWriteSelector('postWriteSelect', contentType));

  const button = selectConfig({ content: contentType, mainCategory });
  const buttonAll = selectAllConfig(contentType);
  useEffect(() => {
    dispatch(
      changeField({
        form: 'postWriteSelect',
        key: contentType,
        value: Initialization,
      }),
    );
  }, []);

  const setStatus = () => {
    dispatch(
      submitForm({
        key: contentType,
      }),
    );

    const value =
      contentType === 'category'
        ? !(status === buttonAll)
        : !(status[0] === buttonAll);
    dispatch(
      changeField({
        form: 'ButtonActive',
        key: contentType,
        value: value,
      }),
    );

    closeModal();
  };

  const cancel = () => {
    dispatch(initializeForm({ form: 'postWriteSelect', key: contentType }));
    closeModal();
  };

  return (
    <div>
      <div style={List}>
        <SelectAllButton />
        {button.map((button, index) => (
          <div key={index}>
            <SelectButton text={button.text} />
          </div>
        ))}
      </div>
      <div style={Border} />
      {BottomButton({
        cancel: cancel,
        actText: '확인',
        act: setStatus,
        actColor: false,
      })}
    </div>
  );
};

export default ButtonSelectModal;
