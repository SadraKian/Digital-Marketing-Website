"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        // @ts-expect-error
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 2000000000000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
