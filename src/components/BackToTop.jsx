const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className="bg-slate-700 w-full h-10 flex justify-center items-center mt-3 cursor-pointer hover:bg-slate-800"
    >
      <button className="text-white">
        Back to top
      </button>
    </div>
  );
};

export default BackToTop;