import { Route } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';

function DefaultLayout(props) {
  const { exact, path, component: Component } = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (
          <>
            <Header type="user" />
            <div className="main-container">
              <Component {...routeProps} />
            </div>
            <Footer />
          </>
        )
      }}  
    />
  );
}

export default DefaultLayout;
