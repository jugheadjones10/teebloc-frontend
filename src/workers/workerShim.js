// Copied this from: https://github.com/KMJ-007/react-pdf-webworker/blob/main/src/workers/workerShim.js

if (
  typeof WorkerGlobalScope !== "undefined" &&
  self instanceof WorkerGlobalScope
) {
  self.global = self;
  self.window = self;
  // Shim localStorage so that code using it doesn't fail.
  if (typeof localStorage === "undefined") {
    self.localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      length: 0,
    };
  }
}

if (import.meta.env.DEV) {
  // Dynamically import react-refresh only in development
  import(/* @vite-ignore */ "/@react-refresh")
    .then((module) => {
      const RefreshRuntime = module.default;
      RefreshRuntime.injectIntoGlobalHook(window);
      window.$RefreshReg$ = () => {};
      window.$RefreshSig$ = () => (type) => type;
      window.__vite_plugin_react_preamble_installed__ = true;
    })
    .catch((error) => {
      console.error("Failed to load react-refresh:", error);
    });
}
