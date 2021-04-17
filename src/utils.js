import toast, { toastConfig } from "react-simple-toasts";

export const toastWrapper = (msg) => {
  toastConfig({
    position: "right",
  });
  return toast(msg);
};
