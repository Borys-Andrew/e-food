import { useState } from "react";

import { ThemeToggle } from "./components";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-svh w-screen flex-col items-center justify-center">
      <Button onClick={() => setCount((prev) => (prev += 1))}>
        Count {count}
      </Button>
      <ThemeToggle />
    </div>
  );
}

export default App;
