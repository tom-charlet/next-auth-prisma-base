'use client'

import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardPage() {

    const { data: session } = useSession();

    return (
        <>
            {session?.user ? (
                <>
                    {session.user.image && (
                        <Image src={session.user.image} alt="User Image" width={50} height={50} className='rounded-full' />
                    )}
                    {session.user.name && <p>{session.user.name}</p>}
                    <button onClick={() => signOut()}>Déconnexion</button>
                </>
            ) : (
                <>
                    <Link href="login">Se connecter</Link>
                </>
            )}
        </>
    )
}