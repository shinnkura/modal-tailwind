import React from "react";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

interface SidebarProps {
  isActive: (item: string) => boolean;
  onClick: (item: string) => void;
}

const Sidebar = ({ isActive, onClick }: SidebarProps) => {
  const regions = ["tokyo", "kanagawa", "chiba", "saitama"];

  return (
    <div className="w-1/3 border-r-2 h-[400px]">
      <h3
        className={`sidebar-item ${isActive("facility") ? "sidebar-item-active" : "sidebar-item-hover"} item`}
        onClick={() => onClick("facility")}
      >
        施設形態を選択
      </h3>
      <h3
        className={`sidebar-item ${isActive("location") ? "text-custom-red" : "sidebar-item-hover"} item`}
        onClick={() => onClick("tokyo")}
      >
        勤務地を選択
      </h3>
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
      <h3
        className={`sidebar-item ${isActive("workstyle") ? "sidebar-item-active" : "sidebar-item-hover"} item`}
        onClick={() => onClick("workstyle")}
      >
        働き方を選択
      </h3>
    </div>
  );
};

export default Sidebar;
