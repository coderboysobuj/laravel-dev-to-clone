import React from "react";
import { toast } from "react-hot-toast";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/components/InputError";
import { useForm, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Chirp from "@/components/Chirp";
import { Button } from "@/components/ui/button";

export default function Index({ auth, chirps }: PageProps) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
    });

    const chirps2 = chirps as any;

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("chirps.store"), {
            onSuccess: () => {
                toast.success("Chirper created 🚀🚀.");
                reset();
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Chirps" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="What's on your mind?"
                        className="
                        block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm
                        dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-50
                        "
                        onChange={(e) => setData("message", e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <Button className="mt-4" disabled={processing}>
                        Chirp
                    </Button>
                </form>
                <div className="mt-6 bg-white dark:bg-zinc-950 shadow-sm rounded-lg divide-y dark:divide-zinc-500">
                    {chirps2 &&
                        chirps2.map((chirp: any) => (
                            <Chirp key={chirp.id} chirp={chirp} />
                        ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
