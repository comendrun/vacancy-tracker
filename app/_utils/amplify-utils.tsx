/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { ReactNode } from "react";
import { Amplify } from "aws-amplify";
import config from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(config, { ssr: true });

export default function Auth({ children }: { children: ReactNode }) {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
}
