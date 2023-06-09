import { useGetCurrentUserQuery } from '@/services/api/auth';
import { useTypedSelector } from '@/stores/configureStore';
import * as React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const { data: currentUser } = useGetCurrentUserQuery();
  const { token } = useTypedSelector((state) => state.auth);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
