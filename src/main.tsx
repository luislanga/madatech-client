import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeWrapper from "./styles/ThemeWrapper.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import { Toaster } from 'react-hot-toast';

import App from "./App.tsx";

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>

      <QueryClientProvider client={queryClient}>
        <ThemeWrapper>
          <GlobalStyles />
          <Toaster position="top-center" />
          <App />
        </ThemeWrapper>
      </QueryClientProvider>

  </StrictMode>
);
