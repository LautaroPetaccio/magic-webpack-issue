import React, { useCallback, useEffect } from "react";
const Magic = require("magic-sdk").Magic;
const OAuthExtension = require("@magic-ext/oauth").OAuthExtension;

function App() {
  const doConnection = useCallback(async () => {
    return new Magic("dsfwdsf", {
      extensions: [new OAuthExtension()],
      network: {
        rpcUrl: "aUrl",
        chainId: 234,
      },
    });
  }, []);

  useEffect(() => {
    doConnection();
  }, []);

  return (
    <div className="App">
      <h1>Hello World..!</h1>
    </div>
  );
}
export default App;
