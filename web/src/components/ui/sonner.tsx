"use client";

import type { CSSProperties } from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const defaultStyles: CSSProperties = {
  "--normal-bg": "var(--popover)",
  "--normal-text": "var(--popover-foreground)",
  "--normal-border": "var(--border)"
};

const Toaster = ({ theme = "light", style, ...props }: ToasterProps) => {
  const mergedStyles: CSSProperties = {
    ...defaultStyles,
    ...(style ?? {})
  };

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={mergedStyles}
      {...props}
    />
  );
};

export { Toaster };
