import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore } from 'redux';

import Main from './blocks/main/main';
import reducer from './reducers/index';


// Создаём Redux store и подключаем расширение для браузера только в dev режиме
const store = createStore(reducer, composeWithDevTools());

/**
 * @function
 * @name init — функция для инициализации приложения.
 * @param {Object} [newStore = store] — Redux store
 * @param {Function} Component — компонент для рендеринга
 */
const init = (newStore = store, Component) => {
    render(
        <AppContainer>
            <Provider store={newStore}>
                <Router>
                    <Route path="/" component={Component} />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app'),
    );
};

init(store, Main);


// Hot Module replacement: обновляем модули и Redux store на лету
if (module.hot) {
    module.hot.accept(['./blocks/main/main', './reducers'], () => {
        /* eslint-disable global-require */
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
        init(store, Main);
    });
}
