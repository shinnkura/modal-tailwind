import React from "react";
import Clear from "@mui/icons-material/Clear";

interface CheckedItemsDisplayProps {
  checkedItems: string[];
  onItemRemove: (item: string) => void;
  onClearAll: () => void;
}

const CheckedItemsDisplay = ({ checkedItems, onItemRemove, onClearAll }: CheckedItemsDisplayProps) => {
  return (
    <div className="border-dashed border-2 rounded-md	 p-px flex-grow h-24 ml-2 mr-4 flex flex-wrap max-w-[800px]">
      {checkedItems.map((item, index) => (
        <div key={index} className="flex items-center border p-1 m-1 max-h-[30px] rounded bg-gray-100">
          {item}
          <Clear onClick={() => onItemRemove(item)} />
        </div>
      ))}
      <button onClick={onClearAll} className="ml-auto text-[#00aeff]">
        すべてクリア
      </button>
    </div>
  );
};

export default CheckedItemsDisplay;
