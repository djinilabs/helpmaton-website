/// <reference path="../.astro/types.d.ts" />

interface Window {
  posthog?: {
    capture: (event: string, props?: Record<string, unknown>) => void;
  };
}