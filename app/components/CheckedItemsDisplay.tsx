import React from "react";
import Clear from "@mui/icons-material/Clear";

interface CheckedItemsDisplayProps {
  checkedItems: string[];
  onItemRemove: (item: string) => void;
  onClearAll: () => void;
}

const CheckedItemsDisplay = ({ checkedItems, onItemRemove, onClearAll }: CheckedItemsDisplayProps) => {
  return (
    <div className="border-dashed border-2 rounded-md p-2 flex flex-wrap items-center w-[800px] h-[100px] ml-[20px]">
      {checkedItems.map((item, index) => (
        <div key={index} className="flex items-center border p-1 mr-2 rounded bg-gray-100 ">
          {item}
          <Clear onClick={() => onItemRemove(item)} className="cursor-pointer" />
        </div>
      ))}
      {checkedItems.length > 0 && (
        <button onClick={onClearAll} className="text-[#00aeff] ml-2">
          すべてクリア
        </button>
      )}
    </div>
  );
};

export default CheckedItemsDisplay;
