import React from "react";

interface SquareCardProps {
    children: JSX.Element | string;
    bottom?: boolean;
    className?: string
}


const SquareCard: React.FC<SquareCardProps> = ({ children, bottom, className }) => {
    return (
        <div className={`${className} w-full h-full cursor-pointer overflow-hidden relative flex flex-col justify-center items-start`}>
            <div className="select-none	w-full h-full overflow-hidden relative flex flex-col justify-center items-start">

                {children}

            </div>
        </div>

    );
};

export default SquareCard;