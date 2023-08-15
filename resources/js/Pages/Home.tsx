import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Welcome({
    auth,
    posts
}: PageProps<{ laravelVersion: string; phpVersion: string, posts: any }>) {
    console.log(posts)
    return (
        <Authenticated user={auth.user}>
            <Head title="Welcome" />
        </Authenticated>
    );
}
