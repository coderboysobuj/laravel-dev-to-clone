import React from 'react'
import { Card, CardContent } from '../ui/card';
import { EyeIcon, HeartIcon, MessageCircleIcon, MoreHorizontalIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { format } from 'date-fns'

export interface User {
    id: number;
    name: string;
}

export interface Post {
    id: number;
    user_id: number;
    title: string;
    body: string;
    slug: string;
    created_at: string;
    user: User
}

interface FeedProps {
    posts: Post[]
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
    return (
        <ul className="flex flex-col space-y-4 w-full">
            {posts.map(post => (

                <li key={post.id} className="w-full">
                    <Card className='w-full bg-primary-foreground hover:bg-background'>
                        <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3">
                            <div className="flex flex-col">
                                <h3 className='text-xl text-blue-300/90 font-semibold cursor-pointer'>{post.title} </h3>
                                <div className="flex text-muted-foreground items-center gap-2">
                                    <span>Published: {" "} 5 Jan</span>
                                    <span>Edited: {" "} 6 Jan</span>
                                </div>
                            </div>
                            <div className="items-center
                                space-x-4 hidden md:flex">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <HeartIcon className='h-4 w-4' />
                                    <span>0</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <MessageCircleIcon className='h-4 w-4' />
                                    <span>0</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <EyeIcon className='h-4 w-4' />
                                    <span>0</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Button variant='ghost'>
                                    Manage
                                </Button>
                                <Button variant='ghost'>
                                    Edit
                                </Button>
                                <Button variant='ghost'>
                                    <MoreHorizontalIcon />
                                </Button>
                            </div>
                        </div>
                    </Card>
                </li>
            ))}
        </ul>
    )
}

export default Feed;
