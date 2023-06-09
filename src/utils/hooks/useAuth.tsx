import { useTypedSelector } from '@/stores/configureStore';

const useAuth = () => {
  const { token } = useTypedSelector((state) => state.auth);

  const isAuthenticated = () => {
    return Boolean(token);
  };

  return {
    isAuthenticated: isAuthenticated(),
  };
};

export default useAuth;
