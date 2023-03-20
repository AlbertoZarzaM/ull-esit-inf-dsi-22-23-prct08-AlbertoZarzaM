import 'mocha';
import {expect} from 'chai';
import {BubbleSort} from '../src/bubbleSort';
import {MergeSort} from '../src/mergeSort';

import { Solver } from '../src/SolverClass';


describe ('BubbleSort', () => {

  it ('should sort an array of numbers', () => {

    const bubbleSort = new BubbleSort();

    const solver = new Solver([2, 3, 1], bubbleSort);

    solver.logic();

    expect(solver.getData()).to.be.eql([1, 2, 3]);

  });

  it ('should sort an array of numbers', () => {

    const bubbleSort = new BubbleSort();

    const solver = new Solver([2, 3, 1, 4, 5, 6, 7, 8, 9, 10], bubbleSort);

    solver.logic();

    expect(solver.getData()).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  });

  it ('should sort an array of numbers', () => {

    const bubbleSort = new BubbleSort();

    const solver = new Solver([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], bubbleSort);

    solver.logic();

    expect(solver.getData()).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  });

  it ('should sort an array of numbers', () => {

    const bubbleSort = new BubbleSort();
    const mergeSort = new MergeSort();

    const solver = new Solver([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], mergeSort);

    solver.setStrategy(bubbleSort);

    solver.logic();

    expect(solver.getData()).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  });

});