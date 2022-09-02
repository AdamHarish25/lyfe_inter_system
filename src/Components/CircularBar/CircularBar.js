import '../Styles';


const CircularBar = ({
    size = 150,
    progress = 0,
    trackWidth = 10,
    trackColor = `#ddd`,
    indicatorWidth = 10,
    indicatorColor = `#07c`,
    indicatorSharpness = `round`,
    label = `Loading...`,
    labelColor = `#333`,
    spinnerMode = false,
    spinnerSpeed = 1,
    spinnerRotation = 30,
}) => {

    const center = size / 2,
        radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
        dashArray = 2 * Math.PI * radius,
        dashOffset = dashArray * ((100 - progress) / 100)

    let hideLabel = (size < 100 || !label.length || spinnerMode) ? true : false


    return (
        <>
            <div
                className="circleBar-wrapper"
                style={{ width: size, height: size }}
            >
                <svg
                    style={{ width: size, height: size, transform: `rotate(${spinnerRotation}deg)`, }}
                >
                    <circle
                        className="circleBar-track"
                        cx={center}
                        cy={center}
                        fill="transparent"
                        r={radius}
                        stroke={trackColor}
                        strokeWidth={trackWidth}
                    />

                    <circle
                        className={`circleBar-indicator ${spinnerMode ? "circleBar-indicator--spinner" : ""
                            }`}
                        style={{ animationDuration: spinnerSpeed * 1000 }}
                        cx={center}
                        cy={center}
                        fill="transparent"
                        r={radius}
                        stroke={indicatorColor}
                        strokeWidth={indicatorWidth}
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        strokeLinecap={indicatorSharpness}
                    />
                </svg>

                {!hideLabel && (
                    <div
                        className="circleBar-label"
                        style={{ color: labelColor }}
                    >
                        {!spinnerMode && (
                            <span className="circleBar-label__progress">
                                {`${progress > 100 ? 100 : progress
                                    }%`}
                            </span>
                        )}
                    </div>
                )}

            </div>
        </>
    )
}

export default CircularBar;