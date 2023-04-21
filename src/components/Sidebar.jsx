import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const sidebarStyle = {
    width: '100%',
    height: open ? '50px' : '300px',
    transition: 'height 300ms ease-in-out'
  };

  return (
    <div>
      <div
        className="flex flex-col h-screen p-3 bg-gray-800 shadow"
        style={sidebarStyle}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              {open === false ? "Código" : "Código"}{" "}
            </h2>
            <button onClick={() => setOpen(!open)}>
              <svg
                href="../../public/images/codigo-icon.png"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center" >
      </div>
    </div>
  );
}
