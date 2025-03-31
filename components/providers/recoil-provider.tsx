"use client"

import type React from "react"

import { RecoilRoot } from "recoil"

export function RecoilRootProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>
}

