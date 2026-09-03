"use client";

import { EditorHost } from "../editor-host";

export default function EditorPage() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <EditorHost />
    </div>
  );
}
