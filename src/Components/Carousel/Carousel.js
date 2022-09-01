/* eslint-disable eqeqeq */
import { Children, cloneElement, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Icons from "../Icons";
import '../Styles';

export const CarouselItem = ({ children, className = "w-full h-full" }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = Children.count(children) - 1;
        } else if (newIndex >= Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <div
            {...handlers}
            className="carousel"
        >
            <div
                className="inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {Children.map(children, (child, index) => {
                    return cloneElement(child, { width: "100%" });
                })}
            </div>
            <button
                className="left_button"
                onClick={() => {
                    updateIndex(activeIndex - 1);
                }}
            >
                {Icons.leftArrow("text-gray-500", "h-12 w-12")}
            </button>
            <button
                className="right_button"
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}
            >
                {Icons.rightArrow("text-gray-500", "h-12 w-12")}
            </button>
        </div>
    );
};

export default Carousel;
