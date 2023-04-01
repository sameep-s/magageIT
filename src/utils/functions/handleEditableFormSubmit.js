import { toast } from "react-hot-toast";

export function handleEditableFormSubmit(e, title, onSubmit, setTitle, setIsEditable) {
    e.preventDefault();
    if (title === "") {
        toast.error("Title cannot be empty");
        return;
    }
    onSubmit(title);
    setTitle("");
    setIsEditable(false);
}