/** postData 게시글을 수정 시 전달되는 정보를 관리하는 리덕스 */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  postData: {
    data: {},
  },
};

const postDataSlice = createSlice({
  name: 'postData',
  initialState,
  reducers: {
    changePostDataField: (state, { payload: { value } }) => {
      state.postData.data = value;
    },
    initializeForm: (state) => {
      state.postData = initialState.postData;
    },
  },
});

export default postDataSlice;
export const { changePostDataField, initializeForm } = postDataSlice.actions;

const postDataSelects = (field) => (rootState) => {
  return rootState.postData.postData[field] || initialState.postData[field];
};

export const postDataSelector = createSelector(
  postDataSelects,
  (field) => field,
);
