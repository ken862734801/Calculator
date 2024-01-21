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
    }

    return (
        <main>
            <Calculator theme={theme} />
            <div>
                <button
                    className="w-[30px] h-[30px] border border-solid border-black rounded-full bg-[var(--blue)] hover:bg-[var(--blue-hover)]"
                    onClick={() => toggleTheme('blue')}
                ></button>
                <button
                    className="w-[30px] h-[30px] border border-solid border-black rounded-full bg-[var(--pink)] hover:bg-[var(--pink-hover)]"
                    onClick={() => toggleTheme('pink')}
                ></button>
            </div>
        </main>
    );
}
