import React from "react";
import TodosList from "./TodosList";

export default function TodosLayout({ children }: { children: React.ReactNode }) {
    return(
        <main className="flex">
            <div>                
                <TodosList />
            </div>
            {/* Only this part is going to change (adopting the incremental layout approach ==> less rerenders) */}
            <div className="flex-1">{children}</div>
        </main>
    )
}