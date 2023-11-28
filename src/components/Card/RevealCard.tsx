import SquareCard from "./SquareCard";
import RectangleCard from "./RectangleCard";
interface RevealCardProps {
    active: boolean;
    children?: JSX.Element | string;
}

const RevealCard: React.FC<RevealCardProps> = ({
    active,
    children
}) => {
    return (
        <>
            <div
                className={`${active ? "w-10/12 lg:w-6/12" : "w-3/12"
                    } h-[95%] ease-in-out duration-[1000ms]`}
            >
                {active ? (
                    <div className={`w-full h-full cursor-pointer overflow-hidden relative flex flex-col justify-center items-start`}>
                        <div className="select-none	w-full h-full overflow-hidden relative flex flex-col justify-center items-start">

                            {children}

                        </div>
                    </div>
                ) : (
                    <div className={`select-none w-full h-full cursor-pointer overflow-hidden relative`}>
                        {children}
                    </div>
                )}
            </div>
        </>
    );
};

export default RevealCard;
