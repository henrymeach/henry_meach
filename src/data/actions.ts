'use server';

import { redirect } from "next/navigation";
import { z } from 'zod';

const emailSchema = z.object({
    email: z.string({
        invalid_type_error: "Invalid email",
    }),
    message: z.string({
        invalid_type_error: "Invalid message",
    })
})

export default async function sendEmail(formData: FormData) {
    const validatedFields = emailSchema.safeParse({
        email: formData.get('email'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    
}