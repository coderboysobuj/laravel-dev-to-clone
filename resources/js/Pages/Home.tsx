import { Head, Link, InertiaLinkProps } from "@inertiajs/react";
import { PageProps } from "@/types";
import { cn } from '@/lib/utils'
import HomeLayout from "@/Layouts/HomeLayout";
import { Post } from "@/components/Dashboard/Feed";
import Feed from "@/components/Feed";

export default function Welcome({
    auth,
    posts
}: PageProps<{ laravelVersion: string; phpVersion: string, posts: Post[] }>) {
    return (
        <HomeLayout user={auth.user}>
            <Head title="Welcome" />
            <div className="">
                <div className='flex items-center space-x-4'>
                    <TopbarLink href='/relevent' active>
                        Relevent
                    </TopbarLink>
                    <TopbarLink href='/relevent'>
                        Latest
                    </TopbarLink>
                    <TopbarLink href='/relevent'>
                        Top
                    </TopbarLink>
                </div>

                <section className="py-4 space-y-1">
                    {posts.map(post => (
                        <Feed post={post} key={post.slug} />
                    ))}
                </section>
            </div>
        </HomeLayout>
    );
}

function TopbarLink({ active, className = '', children, ...props }: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link {...props} className={cn('text-muted-foreground font-medium hover:text-blue-500 text-lg',
            active && 'text-xl font-bold text-primary'
        )}>
            {children}
        </Link>
    )
}
