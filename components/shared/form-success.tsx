import { CheckCircle } from "lucide-react";


export function FormSuccess({ message }: { message?: String; }) {
    if (!message) {
        return null;
    }

    return (
        <div className="flex items-center gap-x-2 text-sm text-emerald-500 p-3 rounded-md bg-emerald-500/15">
            <CheckCircle className="h-4 w-4" />
            <p>{message}</p>
        </div>
    );
}