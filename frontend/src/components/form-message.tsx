export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm mt-5">
      {"success" in message && (
        <div className="bg-green-100 text-green-600 border rounded border-green-600 p-4">
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className="bg-red-100 text-red-600 border rounded border-red-600 p-4">
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className="bg-primary text-background border rounded border-background p-4">{message.message}</div>
      )}
    </div>
  );
}
