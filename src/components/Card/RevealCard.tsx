import React, { useState, useEffect } from "react";
import SquareCard from "./SquareCard";
import RectangleCard from "./RectangleCard";
interface RevealCardProps {
    imageRevealUrl: string;
    active: boolean;
    text: string[];
    fn?: () => void;
    children: JSX.Element | string;

}

const RevealCard: React.FC<RevealCardProps> = ({
    imageRevealUrl,
    active,
    text,
    fn,
    children
}) => {


    const [fadeIn, setFadeIn] = useState(false);
    const [showModal, setShowModal] = useState(false); // Step 2: State to control modal visibility

    useEffect(() => {
        // When active becomes true, set the fadeIn state to true after a short delay (to allow time for the other animations)
        if (active) {
            setTimeout(() => setFadeIn(true), 1000);
        } else {
            // If active becomes false, set fadeIn to false immediately
            setFadeIn(false);
        }
    }, [active]);

    // Step 3: Function to open the modal when play button is clicked
    const handlePlayButtonClick = () => {
        setShowModal(true);
    };

    return (
        <>
            <div
                className={`hidden lg:block ${active ? "w-10/12 lg:w-6/12" : "w-3/12"
                    } h-[95%] ease-in-out duration-[1000ms]`}
            >
                {active ? (
                    <SquareCard bottom={true}>
                        <>
                            <div className="absolute top-0 left-0 w-full h-full z-10">
                                {/* Image component */}
                                {children}
                            </div>

                            {/* <div className={`absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center`}>
                                <div className={`relative w-full h-[40%] lg:h-full `}>
                                    <Image
                                    priority= {true}
                                        src={"/assets/Frame3/PLAY_BUTTON.png"}
                                        alt="Play Button"
                                        fill={true}
                                        className={`object-cover object-center scale-50 ease-in-out duration-[1000ms] cursor-pointer ${fadeIn ? "opacity-100" : "opacity-0"
                                            }`} // Use fadeIn state to control the opacity
                                        onClick={handlePlayButtonClick} // Handle click event
                                    />
                                </div>
                            </div> */}
                            <div
                                className={`${fadeIn ? "opacity-100 h-max" : "opacity-0 h-0"
                                    }   bottom-5 ease-in-out duration-[1000ms] px-6 2xl:px-12 absolute z-20 w-full flex flex-col justify-center items-center`}
                            >
                                <h2 className="leading-none	font-GS3_Foundry font-bold text-nYellow uppercase pb-3 text-sm 2xl:text-4xl">
                                    {text[0]}
                                </h2>
                                <p className="leading-none font-GS3_Replica font-normal text-center text-white uppercase bg-black/20 text-[8px] lg:text-sm 2xl:text-xl border-b-4 border-nYellow">
                                    {text[1]}
                                </p>
                            </div>
                        </>
                    </SquareCard>
                ) : (
                    <RectangleCard pointer={true}>
                        <>
                            <div
                                className="absolute top-0 left-0 w-full h-full z-10"
                                onClick={fn}
                            >
                                {/* Image component */}
                                <Image
                                    priority={true}
                                    src={imageRevealUrl}
                                    alt="Card Image"
                                    fill={true}
                                    className={`rounded-3xl p-1 ease-in-out duration-[1000ms] object-cover object-center`}
                                />
                            </div>
                            <div
                                className={`absolute z-20 bottom-8 right-3 lg:bottom-5 lg:right-5 [writing-mode:vertical-lr] rotate-180 ${fadeIn ? "opacity-0" : "opacity-100"
                                    } ease-in-out duration-[1000ms]`}
                            >
                                <h2 className="leading-none	font-GS3_Foundry font-bold text-white uppercase text-xs lg:text-4xl 2xl:text-5xl">
                                    {text[3]}
                                    <br />
                                    {text[2]}
                                </h2>
                            </div>
                        </>
                    </RectangleCard>
                )}
            </div>
        </>
    );
};

export default RevealCard;
