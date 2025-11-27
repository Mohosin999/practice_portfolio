import React from "react";
import { ImSpinner9 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <ImSpinner9 className="w-12 h-12 text-sky-600 animate-spin" />
    </div>
  );
}
