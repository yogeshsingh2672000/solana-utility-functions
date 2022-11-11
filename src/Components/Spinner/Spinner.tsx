function Spinner() {
    return (
        <div className="z-50 absolute ml-[46%] mt-16">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", background: "transparent", display: "block" }} width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#3b5de0" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
        </div>
    )
}

export default Spinner