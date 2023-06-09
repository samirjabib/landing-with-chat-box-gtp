import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useAuth from "hooks/useAuth";
import LoginProviders from "./login-providers";

const LoginModalClient = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true}>
      <DialogContent className="bg-blue w-80 border rounded-md pt-16 border-white/20 shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <DialogHeader>
          <DialogTitle
            className="text-center text-white w-full "
          >
            <p className="max-w-sm font-bold text-title  mb-4">
              Login or sign up with your account
            </p>
          </DialogTitle>
        </DialogHeader>
        <LoginProviders />
      </DialogContent>
    </Dialog>
  );
};

export default LoginModalClient;
