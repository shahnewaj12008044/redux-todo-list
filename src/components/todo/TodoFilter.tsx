
import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { filterTodo } from "@/redux/features/todoSlice";


type TodoFilterProps = {
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>
}

const TodoFilter = ({priority, setPriority}: TodoFilterProps) => {

  const dispatch = useAppDispatch()

  const handlePriorityChange = (newPriority: string) => {
    setPriority(newPriority);
    dispatch(filterTodo(newPriority));
   
  };

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button  className="bg-primary-gradient text-xl font-semibold">Filter</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Filter By Priority</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={priority}  onValueChange={handlePriorityChange}>
            <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
};

export default TodoFilter;