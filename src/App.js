import './App.css';
import { Route, Routes } from 'react-router-dom';
import { StyledToastContainer } from './components/common/Toast';
import 'react-toastify/dist/ReactToastify.css';

import LoginPage from './Auth/pages/LoginPage';
import RegisterPage from './Auth/pages/RegisterPage';
import LogInSelect from './Auth/pages/LoginSelect';

import HomePage from './Manage/pages/HomePage.';
import AlarmPage from './Bar/pages/AlarmPage';

import ActivityDetailPage from './Manage/pages/ActivityDetailPage';
import ActivityWritePage from './Manage/pages/ActivityWritePage.';
import ActivityListPage from './Manage/pages/ActivityListPage.';

import Home from './Home/page/Home';
import CalendarPage from './Calendar/pages/CalendarPage';
import ActivityPage from './Acitivity/pages/ActivityPage';
import DetailActivityPage from './Acitivity/pages/DetailActivityPage';
import CommunityPage from './Community/pages/CommunityPage';
import PostWritePage from './Community/pages/PostWritePage';
import PostDetailPage from './Community/pages/PostDetailPage';
import CommentPage from './Community/pages/CommentPage';
import MyPage from './testpage/myPage';
import SearchActivityPage from './Acitivity/pages/SearchActivityPage';

import BadgePage from './Badge/pages/BadgePage';
import DetailBadgePage from './Badge/pages/DetailBadgePage';
import ActWritePage from './Acitivity/pages/ActWritePage';
import BadgeRegisterPage from './Badge/pages/BadgeRegisterPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LogInSelect />} />
        <Route path="/login/personal" element={<LoginPage />} />
        <Route path="/login/team" element={<LoginPage />} />
        <Route path="/register/personal" element={<RegisterPage />} />
        <Route path="/register/team" element={<RegisterPage />} />

        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/alarm" element={<AlarmPage />} />

        <Route path="/activity" element={<ActivityPage />} />
        <Route
          path="/activity/DetailActivity/:_id"
          element={<DetailActivityPage />}
        />
        <Route path="/activity/search" element={<SearchActivityPage />} />
        <Route path="/activity/ActWrite" element={<ActWritePage />} />

        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/PostWrite" element={<PostWritePage />} />
        <Route path="/community/PostDetail/:_id" element={<PostDetailPage />} />
        <Route path="/community/Comment/:_id" element={<CommentPage />} />

        <Route path="/myPage" element={<MyPage />} />

        <Route path="/manage" element={<HomePage />} />

        <Route path="/manage/Activity" element={<ActivityListPage />} />
        <Route path="/manage/Activity/:_id" element={<ActivityDetailPage />} />
        <Route path="/manage/ActivityWrite" element={<ActivityWritePage />} />

        <Route path="/badge" element={<BadgePage />} />
        <Route path="/badge/detail" element={<DetailBadgePage />} />
        <Route path="/badge/BadgeRegister" element={<BadgeRegisterPage />} />
      </Routes>
      <StyledToastContainer limit={1} />
    </div>
  );
};

export default App;
