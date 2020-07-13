export default () => (
    <div className="flex items-center justify-center h-full">
        <div className="m-auto relative overflow-hidden bg-orange-500 rounded-lg max-w-sm shadow-lg">
            <svg className="absolute bottom-0 left-0" viewBox="0 0 375 283" fill="none"
                 style={{transform: "scale(1.5)", opacity: 0.1}}>
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)"
                      fill="white"/>
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
            </svg>
            <div className="relative text-white p-8">
                <div className="flex justify-center flex-col">
                    <span className="font-bold text-3xl">Markdown Profiles</span>
                    <span className="font-semibold text-2xl">Coming Soon<span className="font-semnibold text-xl">, stay tuned</span></span>
                </div>
            </div>
        </div>
    </div>
);
