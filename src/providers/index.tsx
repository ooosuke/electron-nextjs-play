"use client";

import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Center, ChakraProvider, Container } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error }: Readonly<{ error: Error }>) => {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={() => window.location.assign(window.location.origin)}>refetch</button>
    </div>
  );
};

export const AppProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ChakraProvider>{children}</ChakraProvider>
    </ErrorBoundary>
  );
};
