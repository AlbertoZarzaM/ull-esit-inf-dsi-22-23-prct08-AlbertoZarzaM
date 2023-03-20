
import { Strategy } from './interfaceStrategy';

/**
 * BubbleSort class
 * 
 * This class implements the Strategy interface
 * 
 * This class implements the BubbleSort algorithm
 */
export class BubbleSort implements Strategy {


  execute(data: number[]): number[] {

    const n = data.length;

    for (let i = 0; i < n; i++) {

      for (let j = 0; j < n - 1; j++) {

        if (data[j] > data[j + 1]) {

          const aux = data[j];

          data[j] = data[j + 1];

          data[j + 1] = aux;

        }
      }
    }
    return data;
  }
}