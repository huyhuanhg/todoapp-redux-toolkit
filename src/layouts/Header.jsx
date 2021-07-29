import { Space, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";

import history from '../utils/history';

import { logoutAction } from '../redux/actions';

function Header({
  type,
  isShowSidebar,
  setIsShowSidebar,
  logout,
  userInfo,
}) {
  function handleLogout() {
    localStorage.removeItem('userInfo');
    logout();
    if (type === 'admin') {
      history.push('/login');
    }
  }

  return (
    <div className="header-container">
      <Space>
        {type === 'admin' && (
          <Button
            type="text"
            icon={isShowSidebar
              ? <MenuFoldOutlined style={{ color: 'white' }} />
              : <MenuUnfoldOutlined style={{ color: 'white' }} />
            }
            onClick={() => setIsShowSidebar(!isShowSidebar)}
          >
          </Button>
        )}
        <div style={{ fontSize: 24 }}>LOGO</div>
      </Space>
      {type === 'user' && (
        <Space>
          <Link to="/">
            <Button type="link">Home</Button>
          </Link>
          <Link to="/about">
            <Button type="link">About</Button>
          </Link>
        </Space>
      )}
      {userInfo.name
        ? (
          <Space>
            <h3 style={{ margin: 0, color: 'white' }}>{userInfo.name}</h3>
            <Button
              type="primary"
              onClick={() => handleLogout()}
            >
              Đang xuất
            </Button>
          </Space>
        )
        : (
          <Link to="/login">
            <Button type="primary">Đăng nhập</Button>
          </Link>
        )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  const { userInfo } = state.userReducer;
  return {
    userInfo: userInfo,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutAction()),
  }
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Header);
