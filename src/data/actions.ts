'use server';

import { redirect } from "next/navigation";

export async function sendEmail(formData: FormData) {
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    redirect('/submit')
}