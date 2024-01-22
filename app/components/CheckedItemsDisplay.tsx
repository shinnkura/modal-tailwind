import React from "react";

interface CheckedItemsDisplayProps {
  checkedItems: string[];
  onItemRemove: (item: string) => void;
  onClearAll: () => void;
}

const CheckedItemsDisplay = ({
  checkedItems,
  onItemRemove,
  onClearAll,
}: CheckedItemsDisplayProps) => {
  return (
    <div className="border-dashed border-2 rounded-md	 p-4 flex-grow h-24 ml-2 mr-4 flex flex-wrap">
      {checkedItems.map((item, index) => (
        <div key={index} className="flex items-center border p-1 m-1">
          {item}
          <button onClick={() => onItemRemove(item)} className="ml-2">
            X
          </button>
        </div>
      ))}
      <button onClick={onClearAll} className="ml-auto">
        すべてクリア
      </button>
    </div>
  );
};

export default CheckedItemsDisplay;
