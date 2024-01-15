import React from 'react';

interface ButtonProps {
    isAlt: boolean;
    data: any;
}

const Button = ({ data, isAlt }: ButtonProps) => {
    const val = isAlt && data.value.length == 2 ? data.value[1] : data.value[0];
    
    let styles;
    if (data.type === 'function') {
        styles = 'function';
    } else if (data.type === 'special') {
        styles = 'special';
    } else if (data.type === 'number') {
        styles = 'number';
    } else if (data.type === 'operator') {
        styles = 'operator';
    }

    return (
        <div className='relative w-[55px] mt-4'>
            {data.value.length == 2 && (
                <label className='w-full text-[var(--green)]'>
                    <small>{isAlt ? data.value[0] : data.value[1]}</small>
                </label>
            )}
            <button
                className={`flex items-center justify-center button ${styles}`}
                value={val}
            >
                <div>{val}</div>
            </button>
        </div>
    );
};

export default Button;
