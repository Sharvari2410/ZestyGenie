function Spinner() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-accent-orange border-t-transparent"></div>
      <span className="text-sm text-gray-600">Loading...</span>
    </div>
  );
}

export default Spinner;
