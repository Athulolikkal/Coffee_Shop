import React from 'react';

interface ImgComponentProps {
    src: string;
    alt: string;
    style?: React.CSSProperties;
}

const ImgComponent: React.FC<ImgComponentProps> = ({ src, alt, style }) => (
    <img src={src} alt={alt} style={style} />
);

export default ImgComponent;
