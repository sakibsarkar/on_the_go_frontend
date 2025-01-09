import ProfileSettingsView from "@/views/ProfileSettingsView";
import { Pen } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const ProfileEditDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-primaryMat/10 text-primaryMat center gap-[5px] font-[600]"
        >
          <Pen className="h-4 w-4" />
          Edit profile
        </Button>
      </DialogTrigger>

      <DialogContent>
        <ProfileSettingsView />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileEditDialog;
