import { createContext, FC, useContext, useState } from "react";

const useDialogContextValue = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
  };
};

const DialogContext = createContext(
  {} as ReturnType<typeof useDialogContextValue>
);

const DialogProvider: FC = ({ children }) => {
  return (
    <DialogContext.Provider value={useDialogContextValue()}>
      {children}
    </DialogContext.Provider>
  );
};

const useDialogContext = () => useContext(DialogContext);

export { DialogProvider, useDialogContext };
