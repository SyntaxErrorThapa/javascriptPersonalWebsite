import React from "react";

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      id="static-modal"
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
      aria-hidden="true"
    >
      <div className="relative p-4 w-full max-w-4xl max-h-full">
        <div className="relative bg-custom-bg rounded-lg shadow-lg">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b border-custom-text-charcoal rounded-t">
            <h3 className="text-xl font-semibold text-custom-text-softBlack">
              {title}
            </h3>
            <button
              type="button"
              className="text-custom-text-softBlack bg-transparent hover:bg-custom-text-warmBeige hover:text-custom-text-navyBlue rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4 text-custom-text-softBlack">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
