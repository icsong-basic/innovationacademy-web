import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './assets/stylesheets/App.scss';
import AppBar from './components/AppBar';
import routes from './routes';
import Footer from './components/Footer';
import OnNavigate from './components/OnNavigate';
import MetaTags from './components/MetaTags';
import NoticePopup from './components/NoticePopup.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <OnNavigate />
      <MetaTags />
      <div className="app">
        <AppBar />
        <Switch>
          {
            routes.map((item, key) => {
              return <Route key={key} path={item.path} exact={item.exact} component={item.component} />
            })
          }
          <Redirect to="/404" />
        </Switch>
        <Footer />
        <NoticePopup />
      </div>
    </Router>
  );
}

export default App;
