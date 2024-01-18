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
    {
        type: 'function',
        value: ['enter'],
    },
];

interface CalculatorProps {
    theme: string;
}

function Calculator({ theme }: CalculatorProps) {
    const [isOn, setIsOn] = useState(true);
    const [isAlt, setIsAlt] = useState(false);
    const [inputValue, setInputValue] = useState<string[]>(['0']);

    function clear() {
        setInputValue(['0']);
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

    function calculate() {
        const input = inputValue.join('');
        try {
            const response = useMath.evaluate(input);
            setInputValue([response]);
        } catch (e) {
            console.error(e);
        }
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
                setInputValue((prev) => {
                    if (prev[0] === '0') {
                        return [button.value];
                    } else {
                        return [...prev, button.value];
                    }
                });
            } else if (button.dataset.type === 'function') {
                if (button.value === 'clear') {
                    clear();
                } else if (button.value === 'enter') {
                    calculate();
                }
            }
            return;
        }
    }

    return (
        <div>
            <h5>TI-30XS</h5>
            <h6>MultiView</h6>
            <div className="display">
                {isOn && (
                    <>
                        {inputValue.map((value, index) => (
                            <span key={index}>{value}</span>
                        ))}
                    </>
                )}
            </div>
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
