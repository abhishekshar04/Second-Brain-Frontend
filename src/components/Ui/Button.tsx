import "../../index.css"
export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "lg";
    text: string;
    startIcon?: string;
    endIcon?: string;
    onClick?: () => void;
  }
  
  export const Button = ({ variant, size, text, startIcon, endIcon, onClick }: ButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`px-5 min-w-40 py-3 flex items-center justify-center gap-2 rounded-lg 
          ${variant === "primary" ? "bg-[#FF735C] text-white" : "bg-orange-300 text-white"} 
          ${size === "sm" ? "text-sm" : "text-lg"} 
          ${variant === "secondary" ? "hover:bg-orange-300 cursor-pointer text-white" : "hover:bg-red-500 cursor-pointer text-black"}`}
      >
        {startIcon && <img className="w-6 h-6" src={startIcon}/>}
        <span>{text}</span>
        {endIcon && <img className="w-6 h-6" src={endIcon}/>}
      </button>
    );
  };
  