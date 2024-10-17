function Button({ children, onClick }) {
  return (
    <button
      className="rounded-md bg-slate-800 px-4 py-2 font-bold text-white transition-transform duration-100 hover:scale-105"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
