import { useTheme } from "next-themes";

const DownloadButton = () => {
    const { theme } = useTheme();
    return (
      <div className="fixed laptop:top-36 right-6">
        <a
          href="/cv/chrislain_avocegan_cv_fr.pdf"
          download
          className={`${
          theme === "dark" ? "bg-white text-black hover:bg-gray-400" : "bg-black text-white hover:bg-slate-800"} 
          transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 text-sm font-bold py-2 px-4 rounded`}
        >
          Download My Resume
        </a>
      </div>
    );
  };
  
  export default DownloadButton;