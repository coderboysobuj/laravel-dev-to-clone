import { formatDistance, subDays } from "date-fns";
import ArticleLayout from "@/Layouts/ArticleLayout";
import { Post } from "@/components/Dashboard/Feed";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { CheckIcon, CopyIcon, HeartPulseIcon, MessageCircle } from "lucide-react";
import { BookmarkIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/ui/button";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import { useState } from "react";
import { toast } from "react-hot-toast";


const CopyButton = ({ children }: { children: any }) => {
    const [copyOk, setCopyOk] = useState<boolean>(false);

    const handleClick = () => {
        navigator.clipboard.writeText(children[0].props.children[0]);
        console.log(children)
        setCopyOk(true);
        toast.success('Success!')
        setTimeout(() => {
            setCopyOk(false);
        }, 1000);
    }

    return (
        <Button size='icon' onClick={handleClick} variant='outline' className='absolute top-4 right-4'>
            {copyOk ? (
                <CheckIcon className="h-4 w-4" />
            ) : (
                <CopyIcon className="h-4 w-4" />
            )}
        </Button>
    )
}

const Pre = ({ children }: { children: any }) => <pre className="relative">
    <CopyButton children={children} />
    {children}
</pre>
export default function Article({
    auth,
    post
}: PageProps<{ laravelVersion: string; phpVersion: string, post: Post }>) {
    return (
        <ArticleLayout user={auth.user}>
            <Head title={post.title} />
            <div className="flex w-full">
                <aside className="w-16 hidden md:flex sticky h-screen top-[56px] left-0  gap-4 flex-col mt-16 items-center">
                    <div className="cursor-pointer group flex flex-col items-center gap-2">
                        <HeartPulseIcon className="h-6 w-6 group-hover:text-red-400" />
                        <h4 className="text-muted-foreground">9</h4>
                    </div>
                    <div className="cursor-pointer group flex flex-col items-center gap-2">
                        <MessageCircle className="h-6 w-6 group-hover:text-orange-400" />
                        <h4 className="text-muted-foreground">5</h4>
                    </div>
                    <div className="cursor-pointer group flex flex-col items-center gap-2">
                        <BookmarkIcon className="h-6 w-6 group-hover:text-blue-400" />
                        <h4 className="text-muted-foreground">3</h4>
                    </div>
                    <Button size='icon' variant='ghost' className="rounded-full">
                        <DotsHorizontalIcon className='h-6 w-6' />
                    </Button>
                </aside>
                <section className="w-full">
                    <Card className="border-none overflow-hidden bg-primary-foreground">
                        {/* <div className="relative "> */}
                        {/*     <img className="" src="https://res.cloudinary.com/practicaldev/image/fetch/s--R52eBKAu--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2csyj7x2y21wkrog1kog.png" alt={post.title} /> */}
                        {/* </div> */}
                        <div className="flex flex-col gap-4 py-6 px-8">
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="" />
                                    <AvatarFallback>{post.user.name.split(' ').map(name => name.slice(0, 1))}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="text-lg font-medium">{post.user.name}</h3>
                                    <span className='text-sm text-muted-foreground tracking-tight'>{formatDistance(subDays(new Date(post.created_at), 0), new Date(), { addSuffix: true })}</span>
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
                            <div className="flex items-center flex-wrap">
                                <Tag href="/webdev">#webdev</Tag>
                                <Tag href="/webdev">#javascript</Tag>
                                <Tag href="/webdev">#react</Tag>
                                <Tag href="/webdev">#laravel</Tag>
                            </div>
                            <article className="prose lg:prose-xl prose-zinc dark:prose-invert py-5">
                                <ReactMarkdown
                                    components={{
                                        pre: Pre,
                                        code({ node, inline, className, children, ...props }) {
                                            const match = /language-(\w+)/.exec(className || '')
                                            return !inline && match ? (
                                                <SyntaxHighlighter
                                                    {...props}
                                                    children={String(children).replace(/\n$/, '')}
                                                    style={style}
                                                    language={match[1]}
                                                    PreTag="div"
                                                />
                                            ) : (
                                                <code {...props} className={className}>
                                                    {children}
                                                </code>
                                            )
                                        }
                                    }}
                                    children={post.body}
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw]}
                                />
                            </article>
                        </div>
                    </Card>
                </section>
            </div>
        </ArticleLayout>
    )
}
