

/**
 * Interfaz Strategy
 * 
 * Esta interfaz define el comportamiento de las clases que implementen la interfaz
 */
export interface Strategy {
  execute(data: number[]): number [];
}