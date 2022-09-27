import { useState, forwardRef } from 'react';
import images from '~/assets/image';
import styles from './images.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            {...props}
            src={fallBack || src}
            alt={alt}
            onError={handleError}
        />
    );
});

export default Image;
