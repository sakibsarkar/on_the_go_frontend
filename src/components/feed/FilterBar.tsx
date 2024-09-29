"use client";

import { Input } from "../ui/input";
import CategoryFilterBox from "./CategoryFilterBox";

const FilterBar = () => {
  return (
    <div className="shrink-0 w-[300px] pr-[10px] flex flex-col gap-[25px]">
      <div className="">
        <h3 className="mb-2 text-lg font-medium">Search</h3>
        <Input type="text" placeholder="Search products..." />
      </div>
      <CategoryFilterBox />
    </div>
  );
};

export default FilterBar;
