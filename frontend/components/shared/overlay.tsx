"use client";

import { createPortal } from "react-dom";
import { SyntheticEvent, useCallback, useEffect } from "react";

const Overlay = ({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: () => void;
}) => {
  const backdropClick = useCallback(
    (e: SyntheticEvent) => {
      if (e.target === e.currentTarget) closeModal();
    },
    [closeModal]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return createPortal(
    <div
      className="bg-gray-700/70 fixed top-0 left-0 flex items-center justify-center w-screen h-screen"
      onClick={backdropClick}
    >
      {children}
    </div>,
    document.body
  );
};

export default Overlay;
