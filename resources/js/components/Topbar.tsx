import { Link } from '@inertiajs/react'
import { User } from '@/types'
import ApplicationLogo from '@/components/ui/application-logo'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const Topbar = ({ user }: { user?: User }) => {
    return (
        <header className="h-header sticky bg-opacity-30 z-10 top-0 w-full left-0 backdrop-filter backdrop-blur-lg bg-primary-foreground">
            <div className="container h-full flex items-center justify-between">
                <div className='flex items-center gap-4'>
                    <Link href='/'>
                        <ApplicationLogo />
                    </Link>
                </div>
                <div className='flex items-center gap-4'>

                    {user ? (

                        <Link href={route('posts.index')}>
                            <Button variant='outline' className="border border-blue-500 hover:bg-blue-500 hover:underline text-lg">Create Post</Button>
                        </Link>
                    ) : (
                        <div className='flex items-center space-x-2'>
                            <Link href={route('login')}>
                                <Button variant='outline' className="border border-blue-500 hover:bg-blue-500 hover:underline text-lg">Login</Button>
                            </Link>
                            <Link href={route('register')}>
                                <Button className="bg-blue-500 hover:bg-blue-500/50 text-white text-lg">Get started</Button>
                            </Link>
                        </div>
                    )}

                    {user ? (

                        <DropdownMenu>
                            <DropdownMenuTrigger>

                                <Avatar>
                                    <AvatarImage src="" />
                                    <AvatarFallback>{user.name.split(' ').map(name => name.slice(0, 1))}</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <Link href={route('profile.edit')}>
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                </Link>
                                <Link href={route('logout')} method='post'>
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : null}
                </div>
            </div>
        </header>
    )
}
