'use client';
import React, { useState } from 'react';
import Calculator from './components/Calculator';

export default function Home() {
    const [theme, setTheme] = useState('blue');

    function toggleTheme(color: string) {
        switch (color) {
            case 'blue':
                setTheme('blue');
                break;
            case 'pink':
                setTheme('pink');
                break;
        }
    };

    return (
        <main>
            <Calculator theme={theme} />
            <div>
                <button onClick={() => toggleTheme('blue')}>BLUE</button>
                <button onClick={() => toggleTheme('pink')}>PINK</button>
            </div>
        </main>
    );
};
