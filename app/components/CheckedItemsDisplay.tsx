import React, { useEffect, useRef } from "react";
import Clear from "@mui/icons-material/Clear";

interface CheckedItemsDisplayProps {
  checkedItems: string[];
  onItemRemove: (item: string) => void;
  onClearAll: () => void;
}

const CheckedItemsDisplay: React.FC<CheckedItemsDisplayProps> = ({ checkedItems, onItemRemove, onClearAll }) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [checkedItems.length]);

  return (
    <div
      ref={divRef}
      className="border-dashed border-2 rounded-md p-2 flex flex-wrap items-center overflow-auto w-[800px] h-[100px] ml-[20px]"
    >
      {checkedItems.map((item, index) => (
        <div key={index} className="flex items-center border p-1 mr-2 mb-2 rounded bg-gray-100">
          {item}
          <Clear onClick={() => onItemRemove(item)} className="cursor-pointer" />
        </div>
      ))}
      {checkedItems.length > 0 && (
        <button onClick={onClearAll} className="text-[#00aeff] pb-2">
          すべてクリア
        </button>
      )}
    </div>
  );
};

export default CheckedItemsDisplay;
