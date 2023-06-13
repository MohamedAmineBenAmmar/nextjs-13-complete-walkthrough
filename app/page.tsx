import Image from "next/image";
import TodosList from "./(users)/todos/TodosList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p className="text-red-500">Loading the Todos</p>}>
        <h1>Loading Todos</h1>
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p className="text-blue-500">Loading the Shoping Trolley</p>}>
        <h1>Loading Shoping Trolley</h1>
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
}
