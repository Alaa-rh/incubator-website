const Stepper = ({ steps = [], current = 0, className = "" }) => {
  return (
    <div className={`flex justify-center items-center gap-2 sm:gap-4 lg:gap-6 flex-wrap ${className}`}>
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-center gap-2 sm:gap-3">
          
          {/* الدائرة */}
          <div
            className={`
              flex items-center justify-center rounded-full font-bold border
              w-12 h-12 text-xs px-4
              sm:w-16 sm:h-16 sm:text-sm
              lg:w-20 lg:h-20 lg:text-base
              ${
                idx < current
                  ? "bg-second-color text-white border-second-color"
                  : idx === current
                  ? "bg-white text-main-color border-second-color"
                  : "bg-gray-100 text-gray-400 border-gray-300"
              }
            `}
          >
            {step}
          </div>

          {/* الخط بين الدوائر */}
          {idx < steps.length - 1 && (
            <div className="h-px bg-gray-300 
              w-10 sm:w-16 lg:w-20
            " />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;