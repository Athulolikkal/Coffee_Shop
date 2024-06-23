import { useState, useEffect, ComponentType, CSSProperties } from 'react';
import fallbackImage from '../../public/assets/imageIcon.png';
interface WithImageLoaderProps {
    src: string;
    alt: string;
    style?: CSSProperties;
}

const withImageLoader = <P extends object>(WrappedComponent: ComponentType<P & WithImageLoaderProps>) => {
    return ({ src, alt, style, ...props }: WithImageLoaderProps & P) => {
        const [currentSrc, setCurrentSrc] = useState(src);
        const [isLoaded, setIsLoaded] = useState(false);

        useEffect(() => {
            const img = new Image();
            img.src = currentSrc;
            img.onload = () => setIsLoaded(true);
            img.onerror = () => {
                if (currentSrc !== fallbackImage) {
                    setCurrentSrc(fallbackImage);
                }
            };
        }, [currentSrc]);
        const combinedStyle = { ...style, borderRadius: style?.borderRadius ?? '0px' };
        if (!isLoaded) {
            return <div style={{ ...combinedStyle, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#003B40', fontWeight: 600, fontFamily: 'Raleway', fontSize: '14px', }}>Loading</div>;
        }
        return <WrappedComponent src={currentSrc} alt={alt} style={combinedStyle} {...props as P} />;
    };
};

export default withImageLoader;
