import React from 'react';
import './App.scss';

import { Header } from '~/Header/Header';
import { TravelList } from '~/TravelList/TravelList';

export function App() {
    return (
        <main className="app">
            <Header className="app__header" />
            <TravelList className="app__travel-list" />
        </main>
    );
}
