import React from 'react';
import { User } from '@/types'
import Authenticated from './AuthenticatedLayout'

const HomeLayout = ({ user, children }: { user?: User, children: React.ReactNode }) => {
    return (
        <Authenticated user={user}>
            <div className='grid grid-cols-4 py-2'>
                <aside className='hidden md:block grid-cols-1'>
                    Side nav
                </aside>
                <section className='col-span-4 md:col-span-3 lg:col-span-2'>
                    {children}
                </section>
                <div className='hidden lg:block col-span-1'>
                    Right Side
                </div>
            </div>
        </Authenticated>
    )
}

export default HomeLayout
