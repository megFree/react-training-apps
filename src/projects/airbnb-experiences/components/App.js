import React from 'react';
import './App.scss';
import { Header } from '~/Header/Header';
import { AppBody } from '~/AppBody/AppBody';

export function App() {
    return (
        <main className="app">
            <Header />
            <AppBody />
        </main>
    );
}
