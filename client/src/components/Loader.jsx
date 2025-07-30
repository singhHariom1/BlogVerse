const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-primary/10 to-white">
      <div className="relative">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-primary border-opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary font-bold text-2xl animate-pulse">⏳</span>
        </div>
      </div>
      <p className="mt-6 text-primary text-lg font-semibold tracking-wide animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loader;