import ApplicationLogo from "@/components/ui/application-logo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-zinc-900">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-24 h-24 fill-current" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md  mt-6 px-6 py-4 bg-white dark:bg-zinc-800 shadow-md overflow-hidden sm:rounded-lg md:rounded-xl">
                {children}
            </div>
        </div>
    );
}
