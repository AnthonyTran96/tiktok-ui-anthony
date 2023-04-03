import { useState } from 'react';
import images from '~/assets/images';
function Image({ src, alt, className, fallback: customFallback = images.noImage, ...passProps }) {
    const [fallback, setFallback] = useState('');
    const handleImageError = () => {
        setFallback(customFallback);
    };
    return <img src={fallback || src} alt={alt} className={className} onError={handleImageError} {...passProps} />;
}

export default Image;
