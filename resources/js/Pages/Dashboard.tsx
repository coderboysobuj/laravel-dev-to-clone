import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import DashboardLayout from "@/Layouts/DahsboardLayout";
import Feed, { Post } from "@/components/Dashboard/Feed";

export default function Dashboard({ auth, posts }: PageProps) {
    const postsItems = posts as Post[];

    return (
        <DashboardLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-4 flex items-center justify-between">
                <h1 className="font-bold text-xl">Posts</h1>
            </div>
            {postsItems.length > 0 ? (
                <Feed posts={postsItems} />
            ) : (
                <h1>Not post found</h1>
            )}
        </DashboardLayout>
    );
}
