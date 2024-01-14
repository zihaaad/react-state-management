import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {addTodo} from "@/redux/features/todoSlice";
import {useAppDispatch} from "@/redux/hook";
import {FormEvent, useState} from "react";

export function AddTodoModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispathch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const id = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      id,
      title,
      description,
    };

    dispathch(addTodo(taskDetails));
    setTitle("");
    setDescription("");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="shadow-2xl">
          ADD TODO
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your taks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                id="task"
                name="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                name="description"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Add Todo</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
