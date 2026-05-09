type variantBtn = "custom" | "default";

type ButtonProps = React.ComponentProps<"button"> & {
  className?: string;
  variant: variantBtn;
};

const buttonVariant = {
  default:
    "flex-1 w-6 h-6 border border-gray-200 rounded-md flex items-center justify-center bg-gray-50",

  custom:
    "bg-blue-800 text-white border rounded-md border-transparent py-2 font-semibold text-xs",
};

export default function Button({
  children,
  onClick,
  className,
  variant,
}: ButtonProps) {
  return (
    <button
      className={`${className} ${buttonVariant[variant]} cursor-pointer mt-auto hover:opacity-85 transition-all duration-150 ease-linear`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
