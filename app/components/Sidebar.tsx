import React from "react";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

interface SidebarProps {
  isActive: (item: string) => boolean;
  onClick: (item: string) => void;
}

interface SidebarItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem = ({ label, isActive, onClick }: SidebarItemProps) => {
  return (
    <h3 className={`sidebar-item ${isActive ? "sidebar-item-active" : "sidebar-item-hover"} item`} onClick={onClick}>
      {label}
    </h3>
  );
};

const Sidebar = ({ isActive, onClick }: SidebarProps) => {
  const regions = ["tokyo", "kanagawa", "chiba", "saitama"];

  return (
    <div className="w-1/3 border-r-2 h-[400px]">
      <SidebarItem label="施設形態を選択" isActive={isActive("facility")} onClick={() => onClick("facility")} />
      <SidebarItem label="勤務地を選択" isActive={isActive("location")} onClick={() => onClick("tokyo")} />
      <ul className="pt-2.5 pb-2.5 pl-7.5">
        {regions.map((region) => (
          <li
            key={region}
            className={`sidebar-item ${isActive(region) ? "sidebar-item-active" : "sidebar-item-hover"} item`}
            onClick={() => onClick(region)}
          >
            <SubdirectoryArrowRightIcon className="pb-2" />
            {region === "tokyo"
              ? "東京都"
              : region === "kanagawa"
              ? "神奈川県"
              : region === "chiba"
              ? "千葉県"
              : "埼玉県"}
          </li>
        ))}
      </ul>
      <SidebarItem label="働き方を選択" isActive={isActive("workstyle")} onClick={() => onClick("workstyle")} />
    </div>
  );
};

export default Sidebar;
