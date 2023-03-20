

import 'mocha';
import {expect} from 'chai';
import {MergeSort} from '../src/mergeSort';

import { Solver } from '../src/SolverClass';


describe ('MergeSort', () => {

  it ('should sort an array of numbers', () => {

    const mergeSort = new MergeSort();

    const solver = new Solver([2, 3, 1], mergeSort);

    solver.logic();

    expect(solver.getData()).to.be.eql([1, 2, 3]);

  });

  it ('should sort an array of numbers', () => {

    const mergeSort = new MergeSort();

    const solver = new Solver([2, 3, 1, 4, 5, 6, 7, 8, 9, 10], mergeSort);

    solver.logic();

    expect(solver.getData()).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  });

  it ('should sort an array of numbers', () => {

    const mergeSort = new MergeSort();

    const solver = new Solver([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], mergeSort);

    solver.logic();

    expect(solver.getData()).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  });

});