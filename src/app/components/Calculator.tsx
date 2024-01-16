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
        type: 'special',
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
        type: 'special',
        value: ['2nd'],
    },
    {
        type: 'operator',
        value: ['-']
    }
];

interface CalculatorProps {
    theme: string
}

function Calculator({theme}: CalculatorProps) {
    const [isAlt, setIsAlt] = useState(false);

    return (
        <div>
            <h5>TI-30XS</h5>
            <h6>MultiView</h6>
            {list.map((item) => (
                <Button data={item} isAlt={isAlt} theme={theme} />
            ))}
        </div>
    );
}

export default Calculator;
