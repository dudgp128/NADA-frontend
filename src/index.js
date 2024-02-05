import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Mobile, PC } from './styles/Responsive.js';
import './index.css';
import App from './App';
import ModalContainer from './Modal/components/ModalContainer.js';
import BottomNav from './Bar/containers/BottomNav.js';
import Header from './Bar/containers/Header.js';
import authSlice from './Auth/modules/redux/auth.js';
import activitySlice from './Acitivity/modules/activity.js';
import barSlice from './Bar/modules/redux/bar.js';
import filterSlice from './modules/redux/filter.js';
import postWriteSlice from './modules/redux/postWrite.js';
import postDataSlice from './modules/redux/postData.js';
import commentSlice from './Community/modules/redux/comment.js';
import { modalSlice } from './Modal/modules/redux/modal.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './styles/common.scss';
import './styleguide.css';
import searchSlice from './Search/modules/redux/search.js';
import badgeSlice from './Badge/modules/redux/badge.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    activity: activitySlice.reducer,
    bar: barSlice.reducer,
    modal: modalSlice.reducer,
    filter: filterSlice.reducer,
    postwrite: postWriteSlice.reducer,
    postData: postDataSlice.reducer,
    comment: commentSlice.reducer,
    search: searchSlice.reducer,
    badge: badgeSlice.reducer,
  },
  devTools: true,
});

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <Mobile>
          <Header />
          <App />
          <ModalContainer />
          <BottomNav />
        </Mobile>
        <PC>
          <Header />
          <App />
          <ModalContainer />
          <BottomNav />
        </PC>
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>,
);
