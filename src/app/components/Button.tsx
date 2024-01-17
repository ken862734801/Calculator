import React from 'react';

interface ButtonProps {
    data: any;
    isAlt: boolean;
    theme: string;
    handleClick:(e:any) => (void);
}

const Button = ({ data, isAlt, handleClick, theme }: ButtonProps) => {
    const val = isAlt && data.value.length == 2 ? data.value[1] : data.value[0];

    let styles;
    if (data.type === 'function') {
        styles = `function ${theme}`;
    } else if (data.type === 'alt') {
        styles = 'alt';
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
                data-type={data.type}
                className={`flex items-center justify-center button ${styles}`}
                onClick={handleClick}
                value={val}
            >
                {val}
            </button>
        </div>
    );
};

export default Button;
