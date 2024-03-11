/**search, search 와 관련한 데이터를 관리하는 리덕스 */
import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  position: '', // [activity,community]
  mainCategory: '모집',
  focus: '제목', // [제목, 본문, 작성자]
  text: '', // 검색어
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeField: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
    initialized: () => {
      return initialState;
    },
  },
});

export default searchSlice;
export const { changeField, initialized } = searchSlice.actions;

const searchSelect = (state) => state.search || initialState;

export const searchSelector = createSelector(searchSelect, (field) => ({
  position: field.position,
  text: field.text,
  focus: field.focus,
  mainCategory: field.mainCategory,
}));
