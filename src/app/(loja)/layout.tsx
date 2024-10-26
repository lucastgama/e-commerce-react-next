"use client";

import { ProvedorCarrinho } from "@/data/contexts/ContextoCarrinho";
import React from "react";

const Layout = (props: any) => {
  return <ProvedorCarrinho>{props.children}</ProvedorCarrinho>;
};

export default Layout;
