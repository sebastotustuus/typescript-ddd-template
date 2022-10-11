export abstract class FlighterService {
    abstract create(flight: unknown): void
    abstract getById(id: number): any
}