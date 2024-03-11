/** filter, filter와 관련된 정보를 관리하는 리덕스 */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  buttonSelect: {
    // 현재 사용자가 활성화한 maincategory와 filter의 정보를 관리
    maincategory: '모집',
    filter: undefined,
    positon: '',
  },
  subButtonSelect: {
    // 현재 각 filter에서 선택된 값을 관리
    region: ['전국'],
    field: ['전체'],
    category: ['전체'],
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
    },
    addField: (state, { payload: { form, key, value } }) => {
      state[form][key].push(value);
    },
    deleteField: (state, { payload: { form, key, value } }) => {
      const temp = state[form][key].filter((element) => element !== value);
      state[form][key] = temp;
    },
    initializeAll: () => {
      return initialState;
    },
    initializeSub: (state) => {
      state.subButtonSelect = initialState.subButtonSelect;
    },
    initializeForm: (state, { payload: { form, key } }) => {
      state[form][key] = initialState[form][key];
    },
  },
});

export default filterSlice;
export const {
  changeField,
  initializeForm,
  addField,
  deleteField,
  initializeAll,
  initializeSub,
} = filterSlice.actions;

const filterSelects = (type, field) => (rootState) => {
  return rootState.filter[type][field] || initialState[type][field];
};

export const filterSelector = createSelector(filterSelects, (field) => field);
