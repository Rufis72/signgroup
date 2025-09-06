import React, { FC } from 'react';

interface TopBarButtonProps {
    onClick?: any,
    url?: string,
    text: string,
    className?: string,
}

const TopBarButton: FC<TopBarButtonProps> = ({ onClick, url, text, className }) => {
    return (
        <a href={url} className={`flex items-center justify-center ${className}`}>
            <div onClick={onClick}>
                {text}
            </div>
        </a>
    );
};

export default TopBarButton;