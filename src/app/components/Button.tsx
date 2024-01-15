import React from 'react';

interface ButtonProps {
    isAlt: boolean;
    value: string[];
    type: string;
}

const Button = (props: ButtonProps) => {
    let styles;
    if(props.type === 'function'){
        styles = 'function'
    } else if (props.type === 'special'){
        styles = 'special'
    } else if (props.type === 'number'){
        styles = 'number'
    };

    return (
        <div className='relative w-[55px] mt-4'>
            {props.value.length == 2 && (
                <label className='w-full text-[var(--green)]'>
                    <small>{props.isAlt ? props.value[0] : props.value[1]}</small>
                </label>
            )}
            <button className={`button ${styles}`}
                value={
                    props.isAlt && props.value.length == 2
                        ? props.value[1]
                        : props.value[0]
                }
            >
                <div>
                    {props.isAlt && props.value.length == 2
                        ? props.value[1]
                        : props.value[0]}
                </div>
            </button>
        </div>
    );
};

export default Button;
