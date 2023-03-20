
import { Strategy } from './interfaceStrategy';
import { Solver } from './SolverClass';



/**
 * MergeSort class
 * 
 * This class implements the Strategy interface
 * 
 * This class implements the MergeSort algorithm
 */
export class MergeSort implements Strategy {

  /**
   * 
   * @param data Array of numbers to sort
   * @returns  Sorted array of numbers
   */
  execute(data: number[]): number[] {
    
    //Implementacion del algoritmo de ordenacion MergeSort

    if (data.length <= 1) {
      return data;
    }

    const middle = Math.floor(data.length / 2);
    const left = data.slice(0, middle);
    const right = data.slice(middle);

    return this.merge( this.execute(left), this.execute(right) );

  }

  /**
   * 
   * @param left  Left array
   * @param right  Right array
   * @returns  Merged array
   */
  private merge(left:number[], right:number[]):number[]{
    const array:number[] = [];
    let lIndex=0;
    let rIndex=0;
    
    while (lIndex + rIndex < left.length + right.length){
      const lItem = left[lIndex];
      const rItem = right[rIndex];
      
      if(lItem == null){
        array.push(rItem);
        rIndex++;
      }
      else if(rItem == null){
        array.push(lItem);
        lIndex++;
      }
      else if(lItem < rItem){
        array.push(lItem);
        lIndex++;
      }
      else{
        array.push(rItem);
        rIndex++;
      }
    }
    return array;
  }

}