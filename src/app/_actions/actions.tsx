'use server'

export async function sendMessage(formData: FormData) {
    const message = formData.get("message");
}