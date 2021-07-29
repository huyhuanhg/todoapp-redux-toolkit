import { useState } from 'react';
import { Route, Redirect } from "react-router-dom";

import Header from './Header';
import Sidebar from './Sidebar';

function AdminLayout({ exact, path, component: Component }) {
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if (!userInfo) {
    return <Redirect to="/login" />
  } else {
    if (userInfo.role === 'user') {
      return <Redirect to="/" />
    } else {
      return (
        <Route
          exact={exact}
          path={path}
          render={(routeProps) => {
            return (
              <>
                <Header
                  type="admin"
                  isShowSidebar={isShowSidebar}
                  setIsShowSidebar={setIsShowSidebar}
                />
                <div className="admin-container">
                  <Sidebar {...routeProps} isShowSidebar={isShowSidebar} />
                  <div
                    className={`main-content admin-content ${isShowSidebar && 'show'}`}
                  >
                    <div className="main-container">
                      <Component {...routeProps} />
                    </div>
                  </div>
                </div>
              </>
            )
          }}  
        />
      );
    }
  }
}

export default AdminLayout;
