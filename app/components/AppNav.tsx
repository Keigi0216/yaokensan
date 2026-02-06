"use client";

import { useState } from "react";
import { Drawer } from "./Drawer";
import { Header } from "./Header";

export function AppNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setDrawerOpen(true)} />
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
