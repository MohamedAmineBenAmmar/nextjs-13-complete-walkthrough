import { Todo } from "@/typings";
import React from "react";
import { notFound } from "next/navigation";

// Tells next js to try to serve render the page
// The probleme is that can get unexpcected behaviour
export const dynamicParams = true


type PageProps = {
  params: {
    todoId: string;
  };
};

// Example of SSR
const fetchTodo = async (todoId: string) => {
  const response = await fetch(
    // `https://jsonplaceholder.typicode.com/todos/${todoId}`, { cache: "no-cache" }
    // `https://jsonplaceholder.typicode.com/todos/${todoId}`, { cache: "force-cache" }
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const todo: Todo = await response.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);
   if(!todo.id) return notFound()

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id} {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="boder-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}

export default TodoPage;

// Example of static site generation (we are making a request to an external API and generating the pages) SSG
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  // for this Demo, we only generate 10 pages
  const trimmedTodos = todos.slice(0, 10);

  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
