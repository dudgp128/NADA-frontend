/** comment 댓글과 관련된 정보를 관리하는 리덕스 */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  comment: {
    position: 'comment',
    post_id: '',
    comment_id: '',
    reply_id: '',
    userName: '',
    content: '',
    isReplying: Boolean(false),
    isUpdating: Boolean(false),
  },
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    changeField: (state, { payload: { form, value } }) => {
      state.comment[form] = value;
    },
    initializeForm: (state) => {
      state.comment = {
        ...initialState.comment,
        post_id: state.comment.post_id,
      };
    },
  },
});

export default commentSlice;
export const { changeField, initializeForm } = commentSlice.actions;

const commentSelects = (field) => (rootState) => {
  return rootState.comment.comment[field] || initialState.comment[field];
};

export const commentSelector = createSelector(commentSelects, (field) => field);
