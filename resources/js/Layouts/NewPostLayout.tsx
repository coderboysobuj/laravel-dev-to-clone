
import { PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import { Toaster } from "react-hot-toast";

export default function NewPostLayout({
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {

    return (
        <div className="min-h-screen">
            <Toaster />


            <main className="container">
                {children}
            </main>
        </div>
    );
}
