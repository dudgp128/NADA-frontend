/*bar 현재 보여지는 페이지의 하단, 상단바의 상태를 관리하는 리덕스  */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

/*headerState : 상단바 상태, text: 텍스트 출력시 텍스트 값 
headerState 상태값에 대하여는 컴플루언스-개발-프론트엔드개발-상단하단바관련 문서를 참고해주세요.
*/
const initialState = {
  headerStatus: {
    headerState: '',
    text: '',
    position: '',
  },
  bottomStatus: {
    isShowBottom: Boolean(),
  },
};

const barSlice = createSlice({
  name: 'bar',
  initialState,
  reducers: {
    changeHeader: (state, { payload: { key, value } }) => {
      state.headerStatus[key] = value;
    },
    changeBottom: (state, { payload: { key, value } }) => {
      state.bottomStatus[key] = value;
    },
    //한번에 상단, 하단 상태를 설정하기 위한 함수
    changeBarStatus: (
      state,
      { payload: { headerState, text, position = '', isShowBottom } },
    ) => {
      state.headerStatus.headerState = headerState;
      state.headerStatus.text = text;
      state.headerStatus.position = position;
      state.bottomStatus.isShowBottom = isShowBottom;
    },
    initializeForm: (state, { payload: form, key }) => {
      state[form][key] = initialState[form][key];
    },
  },
});

export default barSlice;
export const { changeHeader, changeBottom, changeBarStatus, initializeForm } =
  barSlice.actions;

const barSelects = (type, field) => (rootState) => {
  return rootState.bar[type][field] || initialState[type][field];
};

export const barSelector = createSelector(barSelects, (field) => field);
