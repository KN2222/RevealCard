import React from "react";
interface RectangleCardProps {
    children?: JSX.Element | string;
    pointer?: boolean
}

const RectangleCard: React.FC<RectangleCardProps> = ({ children, pointer }) => {
    return (
        <div className={`select-none w-full h-full ${pointer ? "cursor-pointer" : "cursor-default"} cursor-pointer overflow-hidden relative flex flex-col justify-center items-start`}>           
            {children}
        </div>

    );
};

export default RectangleCard;