import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useAppDispatch } from "@/redux/hook";
import { addTodo} from "@/redux/features/todoSlice";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";





const AddTodoModal = ( ) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority,setPriority] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
      const randomString = Math.random().toString(36).substring(2,9)
      const taskDetails = {
        id: randomString,
        title : task,
        description : description,
        priority : priority,
      }

      dispatch(addTodo(taskDetails))  // dispatch(updateTodo())
    }

  

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-primary-gradient font-xl font-bold">
            Add Todo
          </Button>
          {/* <Button>Edit</Button> */}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add task</DialogTitle>
              <DialogDescription>Add Task to complete</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Task</Label>
                <Input
                  onBlur={(e) => setTask(e.target.value)}
                  id="task"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Description</Label>
                <Input
                  onBlur={(e) => setDescription(e.target.value)}
                   className="col-span-3"
                  id="description"
                />
              </div>
            </div>
            <Select onValueChange={(value)=> setPriority(value)}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <DialogClose asChild>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogClose>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTodoModal;
