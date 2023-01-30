

interface ApiResponse {
    message: string
    data: unknown
}

export function NewResponse(message: string, data?: unknown) : ApiResponse{
    return <ApiResponse>{
        message: message, 
        data: data || null
    }
}