import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { removeTodo, toggleCompleted } from "@/redux/features/todoSlice";

import UpdateTodoModal from "./UpdateTodoModal";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({
  id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  
  const dispatch = useAppDispatch();
  const handleToggleCompleted = () => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div className="bg-white flex justify-between p-3 items-center rounded-md border">
      <input onChange={handleToggleCompleted} type="checkbox" name="" id="" />
      <p>{title}</p>
     
       
        <div
          className={`size-3 rounded-full
             ${priority === "high" ? "bg-red-500" : ""}
             ${priority === "medium" ? "bg-yellow-500" : ""}
             ${priority === "low" ? "bg-blue-500" : ""}`}
        ></div>
        <div>
          {isCompleted ? (
            <p className="font-bold text-green-500">Done</p>
          ) : (
            <p className="font-bold text-red-500">Pending</p>
          )}
        </div>
        <p>{description}</p>
        <div className="flex space-x-2">
          <Button
            onClick={() => dispatch(removeTodo(id))}
            className="bg-red-600 hover:bg-red-500"
          >
            Delete
          </Button>
          <UpdateTodoModal id={id}></UpdateTodoModal>
        </div>
      </div>
   
  );
};

export default TodoCard;
