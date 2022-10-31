import React from 'react';
import './App.scss';

import { Header } from '~/Header/Header';
import { Main } from '~/Main/Main';

export function App() {
    return (
        <main className="app">
            <Header />
            <Main />
        </main>
    );
}
