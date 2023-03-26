import className from 'classnames';

function Button({
    children,
    primary,
    success,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = className(rest.className, ' px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-black': primary,
        'border-green-500 bg-green-500 text-green': success,
        'border-red-500 bg-red-500 text-red': danger,
        'bg-white': rounded,
        'rounded-full': outline,
        'text-blue-500': outline && primary,
        'text-green-500': outline && success,
        'text-red-500': outline && danger
    });

    return <div>
        <div>
            <button {...rest} className={classes}>{children}</button>
        </div>
    </div>
}

Button.propTypes = {
    checkVariationValue: ({
    primary, success,danger, outline,
    }) => {
        const count = 
        Number(!! primary) + 
        Number(!! success) + 
        Number(!! danger) +
        Number(!! outline);

        if(count > 1) {
            return new Error('Only one of the primary, succee, danger, outline');
        };
    }
}

export default Button;
