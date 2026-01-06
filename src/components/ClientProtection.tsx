"use client";

import { useEffect } from "react";

export const ClientProtection = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable specific keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault();
      }

      // Prevent Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspect)
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        ["I", "J", "C"].includes(e.key.toUpperCase())
      ) {
        e.preventDefault();
      }

      // Prevent Ctrl+U (View Source)
      if ((e.ctrlKey || e.metaKey) && e.key.toUpperCase() === "U") {
        e.preventDefault();
      }

      // Prevent Ctrl+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && e.key.toUpperCase() === "S") {
        e.preventDefault();
      }
    };

    // Disable drag start (prevent image dragging)
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <style jsx global>{`
      /* Disable text selection */
      body {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      /* Allow selection in inputs and textareas */
      input, textarea {
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
      }

      /* Hide images from being easily saved on mobile */
      img {
        -webkit-touch-callout: none;
        pointer-events: none;
      }
    `}</style>
  );
};
