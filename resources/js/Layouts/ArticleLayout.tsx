
import React from 'react';
import { User } from '@/types'
import Authenticated from './AuthenticatedLayout'

const ArticleLayout = ({ user, children }: { user?: User, children: React.ReactNode }) => {
    return (
        <Authenticated user={user}>
            <div className='grid grid-cols-6 py-2'>
                <section className='col-span-6 lg:col-span-4'>
                    {children}
                </section>
                <div className='hidden lg:block col-span-2 '>
                    Right Side
                </div>
            </div>
        </Authenticated>
    )
}

export default ArticleLayout;
