
// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

import { useGetTodosQuery } from "@/redux/api/api";



const TodoContainer = () => {
  const [priority, setPriority] = useState("");
 
  type TItem = {
    id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
    priority: string;
  }
  // const {todos} = useAppSelector((state) => state.todos)
  // console.log(todos)
  const {data:todos, isError,isLoading} = useGetTodosQuery(undefined)
  // console.log(todos.data)
  if(isLoading){
    return <p>isLoading</p>
  }
  if(isError){
   return <p>Error ....</p>
  }
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-4 flex justify-between items-center p-2 ">
       <AddTodoModal ></AddTodoModal>
       <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
      </div>
      <div className="bg-primary-gradient p-2 rounded-xl ">
      <div className="bg-white rounded-lg p-3 space-y-2">
        
  {
    todos?.data?.map((item : TItem) => <TodoCard key={item.id}  {...item}  ></TodoCard>)
  }
      </div>
      </div>
    </div>
  );
};

export default TodoContainer;
