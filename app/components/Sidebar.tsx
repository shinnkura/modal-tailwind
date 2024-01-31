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
        className={`pt-2.5 pb-2.5 pl-7.5 relative cursor-pointer ${
          isActive("facility")
            ? "text-custom-red font-bold after:content-[''] after:block after:border-r-4 after:border-custom-red after:absolute after:right-0 after:top-0 after:bottom-0"
            : "hover:bg-[#f3f3f3] hover:after:content-[''] hover:after:block hover:after:border-r-4 hover:after:border-custom-red hover:after:absolute hover:after:right-0 hover:after:top-0 hover:after:bottom-0"
        } item`}
        onClick={() => onClick("facility")}
      >
        施設形態を選択
      </h3>
      <h3 className={`pt-2.5 pb-2.5 pl-7.5 relative cursor-pointer ${isActive("location") ? "text-custom-red " : ""}`}>
        勤務地を選択
      </h3>
      <ul className="pt-2.5 pb-2.5 pl-7.5">
        {regions.map((region) => (
          <li
            key={region}
            className={`pt-2.5 pb-2.5 relative cursor-pointer ${
              isActive(region)
                ? "text-custom-red font-bold after:content-[''] after:block after:border-r-4 after:border-custom-red after:absolute after:right-0 after:top-0 after:bottom-0"
                : "hover:bg-[#f3f3f3] hover:after:content-[''] hover:after:block hover:after:border-r-4 hover:after:border-custom-red hover:after:absolute hover:after:right-0 hover:after:top-0 hover:after:bottom-0"
            } item`}
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
        className={`pt-2.5 pb-2.5 pl-7.5 relative cursor-pointer ${
          isActive("workstyle")
            ? "text-custom-red font-bold after:content-[''] after:block after:border-r-4 after:border-custom-red after:absolute after:right-0 after:top-0 after:bottom-0"
            : "hover:bg-[#f3f3f3] hover:after:content-[''] hover:after:block hover:after:border-r-4 hover:after:border-custom-red hover:after:absolute hover:after:right-0 hover:after:top-0 hover:after:bottom-0"
        } item`}
        onClick={() => onClick("workstyle")}
      >
        働き方を選択
      </h3>
    </div>
  );
};

export default Sidebar;
