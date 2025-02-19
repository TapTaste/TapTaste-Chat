import { sendMessage } from '@/app/_actions/actions'

export function Input() {
    return (
        <form action={sendMessage}>
            <input type="text" name="message" />
            <button type="submit">Send</button>
        </form>
    );
}