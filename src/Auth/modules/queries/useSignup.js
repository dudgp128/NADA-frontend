import { useMutation } from '@tanstack/react-query';
import client from '../../../lib/api/client';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  // 개인 회원
  const postPersonalSignup = async ({
    email,
    password,
    phoneNumber,
    userName,
    region,
    interestField,
  }) => {
    return client.post('/user/signUp', {
      userType: 1,
      email,
      password,
      userName,
      phoneNumber,
      region,
      interestField,
    });
  };

  // 단체 회원
  const postTeamSignup = async ({
    email,
    password,
    phoneNumber,
    groupName,
    category,
    represent,
  }) => {
    return client.post('/user/signUp', {
      email: email,
      password: password,
      userType: 2,
      phoneNumber: phoneNumber,
      groupName: groupName,
      category: category,
      represent: represent,
    });
  };

  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ params, type }) => {
      switch (type) {
        case 'personal':
          return postPersonalSignup(params);
        case 'team':
          return postTeamSignup(params);
        default:
          throw new Error('Invalid user type');
      }
    },
    onSuccess: (data) => {
      console.log('회원가입 완료', data);
      navigate('/login');
    },
    onError: (error, data) => {
      console.log('오류발생!', error, data);
    },
  });
};
