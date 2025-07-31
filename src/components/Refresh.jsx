import { RefreshCcw } from "lucide-react";
import React, { useState } from "react";

const Refresh = () => {
  const [isReload, setIsReload] = useState(false);
  const handleRefresh = () => {
    setIsReload(true);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <button
      onClick={handleRefresh}
      className="text-sm flex items-center gap-1 border-[1.5px] px-3 py-1 rounded-full cursor-pointer"
    >
      <RefreshCcw
        className={`w-5 h-5 ${isReload ? "animate-spin" : "animate-none"}`}
      />
      Refresh
    </button>
  );
};

export default Refresh;
