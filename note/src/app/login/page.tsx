import Image from 'next/image';
import logo from '@/assets/img/logo.jpg';
import * as actions from '@/actions'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { FaGithub } from "react-icons/fa";

export default async function LoginPage() {
    const session = await auth();

    if(session?.user) {
        redirect('/')
    }
    
    return (
        <div className="bg-primary-subtle p-20 flex justify-center h-screen">
            <div className='flex flex-col items-center justify-center bg-primary rounded-md py-4 px-2 shadow-lg'>
                <h3 className='text-secondary font-semibold'>Log in with your GitHub credentials!</h3>
                <Image src={logo} alt="Logo" className='w-1/4 rounded-full mt-20' />
                <form action={actions.signIn}>
                    <button className='mt-10 bg-secondary hover:bg-blue-800 text-white px-20 py-2 rounded-lg flex justify-between items-center gap-3'><FaGithub /> Login</button>
                </form>
            </div>
        </div>
    );
}
