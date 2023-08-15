import { PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import { Toaster } from "react-hot-toast";
import { Topbar } from "@/components/Topbar";

export default function Authenticated({
    user,
    children,
}: PropsWithChildren<{ user?: User; header?: ReactNode }>) {

    return (
        <div className="min-h-screen">
            <Toaster />

            <Topbar user={user} />

            <main className="container">
                {children}
            </main>
        </div>
    );
}
