import './App.css';
import { Route, Routes } from 'react-router-dom';
import { StyledToastContainer } from './components/common/Toast';
import 'react-toastify/dist/ReactToastify.css';

import LoginPage from './Auth/pages/LoginPage';
import RegisterPage from './Auth/pages/RegisterPage';
import LogInSelect from './Auth/pages/LoginSelect';

import HomePage from './Manage/pages/HomePage.';
import AlarmPage from './Bar/pages/AlarmPage';

import ActivityManagePage from './Manage/pages/ActivityManagePage';
import CommunityManagePage from './Manage/pages/CommunityManagePage';
import NoticeManagePage from './Manage/pages/NoticeManagePage';
import NoticeWritePage from './Manage/pages/NoticeWritePage';

import Home from './Home/page/Home';
import CalendarPage from './Calendar/pages/CalendarPage';
import ActivityPage from './Acitivity/pages/ActivityPage';
import DetailActivityPage from './Acitivity/pages/DetailActivityPage';
import CommunityPage from './Community/pages/CommunityPage';
import PostWritePage from './Community/pages/PostWritePage';
import PostDetailPage from './Community/pages/PostDetailPage';
import CommentPage from './Community/pages/CommentPage';

import MyPage from './MyPage/pages/MyPagePage';
import NoticePage from './MyPage/pages/NoticePage';
import NoticeDetailPage from './MyPage/pages/NoticeDetailPage';
import AlarmSettingPage from './MyPage/pages/AlarmSettingPage';
import ContactPage from './MyPage/pages/ContactPage';
import MyPostPage from './MyPage/pages/MyPostPage';
import TermsOfUsePage from './MyPage/pages/TermsOfUsePage';
import Profile from './MyPage/pages/ProfilePage';

import SearchPage from './Search/pages/SearchPage';

import BadgePage from './Badge/pages/BadgePage';
import DetailBadgePage from './Badge/pages/DetailBadgePage';
import ActWritePage from './Acitivity/pages/ActWritePage';
import BadgeRegisterPage from './Badge/pages/BadgeRegisterPage';
import EditPage from './MyPage/pages/EditPage';

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
        <Route path="/activity/ActWrite" element={<ActWritePage />} />

        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/PostWrite" element={<PostWritePage />} />
        <Route path="/community/PostDetail/:_id" element={<PostDetailPage />} />
        <Route path="/community/Comment/:_id" element={<CommentPage />} />

        <Route path="/search" element={<SearchPage />} />

        <Route path="/myPage" element={<MyPage />} />
        <Route path="/myPage/notice" element={<NoticePage />} />
        <Route path="/myPage/notice/:_id" element={<NoticeDetailPage />} />
        <Route path="/myPage/alarmSetting" element={<AlarmSettingPage />} />
        <Route path="/myPage/contact" element={<ContactPage />} />
        <Route path="/myPage/myPost" element={<MyPostPage />} />
        <Route path="/myPage/termsOfUse" element={<TermsOfUsePage />} />

        <Route path="/myPage/profile" element={<Profile />} />
        <Route path="/myPage/profile/edit/:_type" element={<EditPage />} />

        <Route path="/manage" element={<HomePage />} />
        <Route path="/manage/activity" element={<ActivityManagePage />} />
        <Route path="/manage/community" element={<CommunityManagePage />} />
        <Route path="/manage/notice" element={<NoticeManagePage />} />
        <Route path="/manage/notice/write" element={<NoticeWritePage />} />

        <Route path="/badge" element={<BadgePage />} />
        <Route path="/badge/detail" element={<DetailBadgePage />} />
        <Route path="/badge/BadgeRegister" element={<BadgeRegisterPage />} />
      </Routes>
      <StyledToastContainer limit={1} />
    </div>
  );
};

export default App;
