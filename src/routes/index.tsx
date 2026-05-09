import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/shadcn/ui/button";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to Lumen</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
      <Button onClick={() => console.log("Button clicked...")}>Click ME</Button>
    </div>
  );
}
