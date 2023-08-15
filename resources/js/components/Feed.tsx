import { HeartIcon, BookmarkIcon } from '@radix-ui/react-icons'
import { formatDistance, subDays } from 'date-fns'
import { Link } from '@inertiajs/react';
import { Post } from "@/components/Dashboard/Feed"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tag } from "@/components/Tag"
import { Button } from "@/components/ui/button"
import { MessageCircleIcon } from 'lucide-react'

type Props = {
    post: Post
}

export default function Feed({ post }: Props) {
    return (
        <Card className='bg-primary-foreground border-none'>
            <article className="flex px-4 py-3 w-full">
                <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>{post.user.name.split(' ').map(name => name.slice(0, 1))}</AvatarFallback>
                </Avatar>
                <div className='flex flex-col space-y-3 w-full'>
                    <div className='ml-2 text-muted-foreground flex flex-col'>
                        <span className=" font-medium mt-1">{post.user.name}</span>
                        <span className='text-sm tracking-tight'>{formatDistance(subDays(new Date(post.created_at), 0), new Date(), { addSuffix: true })}</span>
                    </div>

                    <Link href={route('article.view', post.slug)}>
                        <h1 className="ml-2 text-2xl font-bold tracking-tight hover:text-blue-300/80 cursor-pointer">{post.title}</h1>
                    </Link>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <Tag href="/tag/javascript">
                            #javascript
                        </Tag>
                        <Tag href="/tag/javascript">
                            #webdev
                        </Tag>
                        <Tag href="/tag/javascript">
                            #programming
                        </Tag>
                    </div>
                    <div className="flex items-center justify-between  w-full">
                        <div>
                            <Button variant='ghost'>
                                <HeartIcon className='mr-2' />
                                3 reactions
                            </Button>
                            <Button variant='ghost'>
                                <MessageCircleIcon className='mr-2 h-4 w-4' />
                                5 Comments
                            </Button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span>3 min read</span>
                            <Button variant='ghost' size='icon' className="hover:bg-blue-900/40">
                                <BookmarkIcon className='h-5 w-5' />
                            </Button>
                        </div>
                    </div>
                </div>
            </article>
        </Card>
    )
}
