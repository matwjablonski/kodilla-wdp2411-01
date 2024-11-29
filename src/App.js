import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';

const App = () => {
  const [mode, setMode] = useState('desktop');

  const updateMode = () => {
    const width = window.innerWidth;
    setMode(width >= 1024 ? 'desktop' : width >= 768 ? 'tablet' : 'mobile');
  };

  useEffect(() => {
    updateMode();
    window.addEventListener('resize', updateMode);
    return () => window.removeEventListener('resize', updateMode);
  }, [mode]);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path={'/'} render={() => <Homepage mode={mode} />} />
              <Route exact path={'/shop/:categoryId'} component={ProductList} />
              <Route exact path={'/product/:productId'} component={ProductPage} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
