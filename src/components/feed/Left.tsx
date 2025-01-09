import { Separator } from "../ui/separator";
import GroupSuggestion from "./GroupSuggestion";
import MyGroups from "./MyGroups";
import ShortCuts from "./ShortCuts";

const LeftBar = () => {
  return (
    <div className="w-[350px] h-full px-4 flex flex-col">
      <ShortCuts />
      <MyGroups />
      <Separator className="my-5" />
      <GroupSuggestion />
    </div>
  );
};

export default LeftBar;
