import { Button, Tabs } from 'antd';
import reactLogo from '../../assets/react.svg';
import './index.scss';
import viteLogo from '/vite.svg';
import { logout } from '@/features/authentication/authSlice';
import { useAppDispatch, useTypedSelector } from '@/stores/configureStore';

function Home() {
  const dispatch = useAppDispatch();
  const currentUser = useTypedSelector((state) => state.auth.user);
  const handleLogout = () => {
    dispatch(logout());
  };

  const _renderHome = () => {
    return (
      <div className="home-container">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <div>
          <h1>HELLO</h1>
          <Button
            htmlType="submit"
            size="large"
            type="primary"
            // loading={isLoading}
            onClick={handleLogout}
          >
            LOGOUT
          </Button>
          {currentUser ? <h2>Hello, {currentUser?.legalName}</h2> : null}
          <p>Built by VITE</p>
        </div>
      </div>
    );
  };
  return (
    <Tabs
      activeKey="home"
      items={[
        {
          key: 'home',
          label: 'Home',
          children: _renderHome(),
        },
      ]}
      className="Home"
    ></Tabs>
  );
}

export default Home;
