"use client"
import { useRouter } from 'next/navigation'


export default function GoBackButton() {
    const router = useRouter()
    return (
        <button
            onClick={() => router.back()}
            className="bg-amber-400 w-full md:w-auto text-xl px-3 py-3 text-center font-bold cursor-pointer"
        >Volver</button>
    )
}
