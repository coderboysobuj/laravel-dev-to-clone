
import { PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import { Toaster } from "react-hot-toast";
import { Topbar } from "@/components/Topbar";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
    user,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {

    return (
        <Authenticated user={user}>

            <div className="flex flex-col space-y-4 py-4">
                <h1 className="text-3xl font-semibold">Dashboard</h1>


                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <CountCard count={0} label="Total post reactions" />
                    <CountCard count={500} label="Total post view" />
                    <CountCard count={0} label="Listed created" />
                    <CountCard count={0} label="Credits available" />
                </div>


                <div className="flex gap-4">

                    <Sidebar />

                    <div className="w-full">
                        {children}
                    </div>


                </div>


            </div>
        </Authenticated>
    );
}


const Sidebar = () => {
    return (
        <aside className="w-1/5 hidden md:block">
            <ul className="flex flex-col">
                <li className="flex cursor-pointer group rounded-lg items-center justify-between p-2">
                    <p className="font-medium text-lg group-hover:text-blue-600/60">Posts</p>
                    <span className="rounded-full bg-primary-foreground flex items-center justify-center p-1.5">
                        1
                    </span>
                </li>
                <li className="flex cursor-pointer group rounded-lg items-center justify-between p-2">
                    <p className="font-medium text-lg group-hover:text-blue-600/60">Series</p>
                    <span className="rounded-full bg-primary-foreground flex items-center justify-center p-1.5">
                        0
                    </span>
                </li>
                <li className="flex cursor-pointer group rounded-lg items-center justify-between p-2">
                    <p className="font-medium text-lg group-hover:text-blue-600/60">Followers</p>
                    <span className="rounded-full bg-primary-foreground flex items-center justify-center p-1.5">
                        1
                    </span>
                </li>
                <li className="flex cursor-pointer group rounded-lg items-center justify-between p-2">
                    <p className="font-medium text-lg group-hover:text-blue-600/60">Following tag</p>
                    <span className="rounded-full bg-primary-foreground flex items-center justify-center p-1.5">
                        1
                    </span>
                </li>
                <li className="flex cursor-pointer group rounded-lg items-center justify-between p-2">
                    <p className="font-medium text-lg group-hover:text-blue-600/60">Following user</p>
                    <span className="rounded-full bg-primary-foreground flex items-center justify-center p-1.5">
                        1
                    </span>
                </li>
                <Button variant='secondary' className="mt-6">Upload Video</Button>
            </ul>
        </aside>
    )
}

const CountCard = ({ label, count }: { label: string, count: number }) => {

    return (
        <Card className="bg-primary-foreground border-none">
            <div className="p-6">
                <h3 className="font-bold text-3xl">{count}</h3>
                <h6 className="text-muted-foreground">{label}</h6>
            </div>
        </Card>
    )
}
