/** postWrite 게시글 작성 페이지 중 모달과 관련된 데이터를 관리하는 리덕스 */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  method: {
    // 글의 작성인지 수정인지 에 대한 정보를 관리
    isSubmit: Boolean(),
  },
  ButtonActive: {
    // 버튼의 활성화 비활성화 에 대한 정보를 관리
    mainCategory: false,
    region: false,
    field: false,
    category: false,
  },
  postWriteSelect: {
    // 사용자가 선택한 버튼에 대한 정보를 관리
    mainCategory: '',
    region: ['전국'],
    field: ['전체'],
    category: '전체',
  },
  postWriteSubmit: {
    //최종적으로 제출될 정보를 관리
    _id: '',
    mainCategory: '',
    region: ['전국'],
    field: ['전체'],
    category: '전체',
    startedAt: '',
    endedAt: '',
  },
};

const postWriteSlice = createSlice({
  name: 'postWrite',
  initialState,
  reducers: {
    changeField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
    },
    setSubmit: (state, { payload: { value } }) => {
      state.postWriteSubmit._id = value._id;
      state.postWriteSubmit.mainCategory = value.mainCategory;
      state.postWriteSubmit.region = value.region;
      state.postWriteSubmit.field = value.field;
      state.postWriteSubmit.category = value.category;
      state.postWriteSubmit.startedAt = value.startedAt;
      state.postWriteSubmit.endedAt = value.endedAt;
    },
    addField: (state, { payload: { form, key, value } }) => {
      state[form][key].push(value);
    },
    deleteField: (state, { payload: { form, key, value } }) => {
      const temp = state[form][key].filter((element) => element !== value);
      state[form][key] = temp;
    },
    initializeForm: (state, { payload: { form, key } }) => {
      state[form][key] = initialState[form][key];
    },
    initializeAll: (state) => {
      state.ButtonActive = initialState.ButtonActive;
      state.postWriteSelect = initialState.postWriteSelect;
      state.postWriteSubmit = initialState.postWriteSubmit;
    },
    submitForm: (state, { payload: { key } }) => {
      state.postWriteSubmit[key] = state.postWriteSelect[key];
    },
  },
});

export default postWriteSlice;
export const {
  addField,
  deleteField,
  initializeForm,
  submitForm,
  changeField,
  setSubmit,
  initializeAll,
} = postWriteSlice.actions;

const postWriteSelects = (type, field) => (rootState) => {
  return rootState.postwrite[type][field] || initialState[type][field];
};

export const postWriteSelector = createSelector(
  postWriteSelects,
  (field) => field,
);
const selectActivity = (state) =>
  state.postwrite.postWriteSubmit || initialState;

export const activitySelector = createSelector(
  selectActivity,
  (postWriteSubmit) => ({
    region: postWriteSubmit.region,
    mainCategory: postWriteSubmit.mainCategory,
    field: postWriteSubmit.field,
    category: postWriteSubmit.category,
  }),
);
