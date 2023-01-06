import React, { FormEvent } from 'react'
import Link from 'next/link'

const RegisterForm = (props: {
    submitHandler: (e: FormEvent<HTMLFormElement>) => void,
    numberOfInput: number;
    navigateLink: string;
    navigateText: string;
    submitLink: string;
    submitText: string;
    children: React.ReactNode;
}) => {
    return (
        <form
            className={`border border-white bg-gray-800 w-[35rem] py-10 min-h-[10rem] 2lg:w-[40rem] min-2lg:h-[30rem] grid grid-rows-${props.numberOfInput + 1} gap-5`}
            onSubmit={props.submitHandler}
            noValidate
        >
            {props.children}
            <div className={'flex justify-between items-center px-12 min-h-[6rem]'}>
                <div className={'text-gray-50 font-bold underline leading-5 text-xl'}>
                    <Link
                        href={props.navigateLink}
                    >
                        {props.navigateText}
                    </Link>
                </div>
                <button
                    className={'h-12 p-2 text-xl font-bold text-gray-50 border bg-gray-900 border-gray-400 hover:bg-gray-400 hover:text-gray-800 transition-all delay-250 cursor-pointer'}
                >
                    {props.submitText}
                </button>
            </div>
        </form>
    )
}

export default RegisterForm
