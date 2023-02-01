export interface ApiAdapter{
  Listen(): void
}

export interface ApiRouter{
  register(r: unknown): void
}