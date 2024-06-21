"use client";

import { useRouter } from "next/navigation";

export function LoginButton(
    { children, mode = "redirect", asChild }:
        { children: React.ReactNode; mode?: "modal" | "redirect"; asChild?: boolean; }
) {
    const router = useRouter();

    const onClick = () => {

        router.push("/auth/login");
    }

    if (mode === "modal") {
        // TODO
        return (
            <span>
                TODO
            </span>
        );
    }

    return (
        <span className="cursor-pointer"
            onClick={onClick}
        >
            {children}
        </span>
    );
}