import React from "react";

interface CheckboxListProps {
  options: string[];
  checkedItems: string[];
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxList = ({
  options,
  checkedItems,
  onCheckboxChange,
}: CheckboxListProps) => {
  return (
    <div>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={option}
            checked={checkedItems.includes(option)}
            onChange={onCheckboxChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default CheckboxList;
