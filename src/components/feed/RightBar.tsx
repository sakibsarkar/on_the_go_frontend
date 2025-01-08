import { Separator } from "../ui/separator";
import GroupSuggestion from "./GroupSuggestion";
import MyGroups from "./MyGroups";

const RightBar = () => {
  return (
    <div className="w-full pr-[10px] flex flex-col">
      <MyGroups />
      <Separator className="my-5" />
      <GroupSuggestion />
    </div>
  );
};

export default RightBar;
