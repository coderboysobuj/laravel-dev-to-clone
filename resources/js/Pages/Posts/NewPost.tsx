import { Head, Link, useForm } from '@inertiajs/react'
import NewPostLayout from "@/Layouts/NewPostLayout";
import { User } from "@/types";
import ApplicationLogo from '@/components/ui/application-logo'
import { Button } from "@/components/ui/button";
import { BoldIcon, CodeIcon, HeadingIcon, ImageIcon, ItalicIcon, LinkIcon, ListIcon, ListOrderedIcon, MoreVerticalIcon, QuoteIcon, SquareCodeIcon, XIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TextareaAutosize from 'react-textarea-autosize'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

const EditorToolbar = () => {
    return (
        <div className='sticky top-0 left-0 bg-background'>
            <div className=" px-8 lg:px-12 py-2 flex items-center justify-between">
                <TooltipProvider>
                    <div className="space-x-3">
                        <Tooltip>
                            <TooltipTrigger>
                                <Button type='button' size='icon' variant='ghost' className="hover:bg-blue-700/30 text-gray-300">
                                    <BoldIcon className="h-6 font-bold text-zinc-300 w-6" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Bold CTRL + B</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button type='button' size='icon' variant='ghost' className="hover:bg-blue-700/30">
                                    <ItalicIcon className="h-6 font-bold text-zinc-300 w-6" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Italic CTRL + I</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <Button size='icon' type='button' variant='ghost' className="hover:bg-blue-700/30">
                                    <LinkIcon className="h-6 font-bold text-zinc-300 w-6" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Link CTRL + K</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <Button size='icon' variant='ghost' className="hover:bg-blue-700/30">
                                    <ListOrderedIcon className="h-6 font-bold text-zinc-300 w-6" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Ordered List</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <Button size='icon' variant='ghost' className="hover:bg-blue-700/30">
                                    <ListIcon className="h-6 font-bold text-zinc-300 w-6" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Unordered List</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <Button size='icon' variant='ghost' className="hover:bg-blue-700/30">
                                    <HeadingIcon className="h-6 font-bold text-zinc-300 w-6" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Heading</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <Button size='icon' variant='ghost' className="hover:bg-blue-700/30">
                                    <QuoteIcon className="h-6 font-bold text-zinc-300 w-6" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Quote</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <Button size='icon' variant='ghost' className="hover:bg-blue-700/30">
                                    <CodeIcon className="h-6 font-bold text-zinc-300 w-6" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Code</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <Button size='icon' variant='ghost' className="hover:bg-blue-700/30">
                                    <SquareCodeIcon className="h-6 font-bold text-zinc-300 w-6" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Code block</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <Button size='icon' variant='ghost' className="hover:bg-blue-700/30">
                                    <ImageIcon className="h-6 font-bold text-zinc-300 w-6" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Insert Image</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <div>

                        <Tooltip>
                            <TooltipTrigger>
                                <Button size='icon' variant='ghost' className="hover:bg-blue-700/30">
                                    <MoreVerticalIcon className="h-6 w-6" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>More shorcut</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>
            </div>
        </div>
    )
}

const NewPost = ({ user }: { user: User }) => {
    const { data, setData, post, processing, reset } = useForm({
        title: '',
        body: ''
    });


    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        post(route('posts.store'), {
            onSuccess: () => {
                toast.success('Post created 🚀')
                reset();
            },
            onError: () => {
                toast.error("Something went wrong try again later.")
            }

        })
    }



    return (
        <NewPostLayout user={user}>
            <Head title='New Post' />
            <div className="py-2 grid grid-cols-3 gap-6">
                <div className="col-span-3 lg:col-span-2">

                    <header className='flex items-center h-header justify-between'>
                        <div className="flex items-center gap-4">
                            <ApplicationLogo />
                            <h3 className="text-xl">Create post </h3>
                        </div>
                        <div className="flex items-center">
                            <Button variant='ghost' className="text-lg">Edit</Button>
                            <Button variant='ghost' className="text-lg">Preview</Button>

                            <Button variant='ghost' size='icon' className="text-lg lg:hidden">
                                <XIcon />
                            </Button>
                        </div>
                    </header>
                    <form onSubmit={onSubmit} className="lg:ml-14">
                        <ScrollArea className="h-editor bg-primary-foreground rounded-xl w-full border border-primary-foreground">
                            <div className="space-y-2  px-8 lg:px-12 py-6 lg:py-10 mr-12">
                                <TextareaAutosize name='title' value={data.title} onChange={(e) => setData((prev) => ({ ...prev, title: e.target.value }))} autoFocus placeholder='New post tile here...' className="w-full resize-none border-none outline-none bg-transparent focus-visible:ring-0 text-4xl lg:text-5xl" />
                            </div>
                            <EditorToolbar />
                            <div className="px-8 pb-10 lg:px-12 py-6 lg:py-10  mr-12">
                                <TextareaAutosize name='body' value={data.body} onChange={(e) => setData((prev) => ({ ...prev, body: e.target.value }))} placeholder='Write you post content here...' className='w-full font-mono placeholder:text-muted resize-none border-none outline-none bg-transparent focus-visible:ring-0 text-lg' />
                            </div>
                        </ScrollArea>

                        <div className='h-article-form-actions flex items-center space-x-4'>
                            <Button type='submit' disabled={processing}>Publish</Button>
                            <Button type='button' variant='ghost'>Save draft</Button>
                        </div>
                    </form>
                </div>
                <div className="col-span-1 hidden lg:block">
                    <div className="flex justify-end items-center">
                        <Link href={route('dashboard')}>
                            <Button type='submit' variant='ghost' size='icon' className="text-lg">
                                <XIcon />
                            </Button>
                        </Link>
                    </div>
                    <div className="py-10 space-y-4">
                        <h3 className="text-xl">
                            Writing a Great Post Title
                        </h3>
                        <p>
                            Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.
                            Use keywords where appropriate to help ensure people can find your post by search.
                        </p>
                    </div>
                </div>
            </div>
        </NewPostLayout>
    )
}

export default NewPost;



