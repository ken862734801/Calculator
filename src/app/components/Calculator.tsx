'use client';
import { create, all } from 'mathjs';
import React, { useState } from 'react';
import Button from './Button';

const config = {
    epsilon: 1e-12,
    predictable: false,
    randomSeed: null,
};

const useMath = create(all, config);

const list = [
    {
        type: 'number',
        value: ['5'],
    },
    {
        type: 'alt',
        value: ['2nd'],
    },
    {
        type: 'function',
        value: ['on', 'off'],
    },
    {
        type: 'function',
        value: ['prb', 'angle'],
    },
    {
        type: 'operator',
        value: ['-'],
    },
    {
        type: 'function',
        value: ['clear'],
    },
];

interface CalculatorProps {
    theme: string;
}

function Calculator({ theme }: CalculatorProps) {
    const [isOn, setIsOn] = useState(true);
    const [isAlt, setIsAlt] = useState(false);

    let curr: string[] = [];

    function clear() {
        curr = ['0'];
        console.log(curr);
    }

    function turnOnCalculator() {
        console.log('Turning on...');
        clear();
        setIsOn(true);
    }

    function turnOffCalculator() {
        console.log('Turning off...');
        setIsOn(false);
    }

    function handleButtonClick(e: any) {
        const button = e.target;

        if (button.value === 'on') {
            turnOnCalculator();
        } else if (button.value === 'off') {
            turnOffCalculator();
        } else if (button.value === '2nd') {
            setIsAlt(!isAlt);
        }

        if (isOn) {
            if (
                button.dataset.type === 'number' ||
                button.dataset.type === 'operator'
            ) {
                curr.push(button.value);
                console.log(curr);
            } else if (button.dataset.type === 'function') {
                if (button.value === 'clear') {
                    clear();
                }
            }
            return;
        }
    }

    return (
        <div>
            <h5>TI-30XS</h5>
            <h6>MultiView</h6>
            {list.map((item) => (
                <Button
                    key={`${item.value}-key`}
                    handleClick={(e) => handleButtonClick(e)}
                    data={item}
                    isAlt={isAlt}
                    theme={theme}
                />
            ))}
        </div>
    );
}

export default Calculator;
