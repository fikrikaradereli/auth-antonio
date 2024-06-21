import { BsExclamationTriangle } from "react-icons/bs";


export function FormError({ message }: { message?: String; }) {
    if (!message) {
        return null;
    }

    return (
        <div className="flex items-center gap-x-2 text-sm text-destructive p-3 rounded-md bg-destructive/15">
            <BsExclamationTriangle className="h-4 w-4" />
            <p>{message}</p>
        </div>
    );
}