"use client"

import { useToast } from "@/hooks/use-toast"
import { X } from "lucide-react"

export function Toaster() {
    const { toasts, dismiss } = useToast()

    return (
        <div className="fixed top-4 right-4 z-50 space-y-2">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`max-w-sm p-4 rounded-lg shadow-lg border ${toast.variant === "destructive"
                            ? "bg-red-50 border-red-200 text-red-800"
                            : "bg-white border-gray-200 text-gray-900"
                        }`}
                >
                    <div className="flex justify-between items-start">
                        <div>
                            {toast.title && <div className="font-semibold mb-1">{toast.title}</div>}
                            {toast.description && <div className="text-sm opacity-90">{toast.description}</div>}
                        </div>
                        <button onClick={() => dismiss(toast.id)} className="ml-2 opacity-50 hover:opacity-100">
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
