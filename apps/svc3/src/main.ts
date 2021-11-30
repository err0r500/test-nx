import { Inject } from '@nestjs/common';
import * as r from 'rtrim';
import {exclamationMark} from './dynamic';

// we can use app use specific dependencies
console.log(r('I print without question mark ?????', '?'));

// even with dynamic imports
exclamationMark()

// we can also use project-wide dependencies
class Other {}

export class Bla{
 constructor(

    @Inject(Other) private readonly loanRepo: Other,
  ) {}

  bla(){
    this.loanRepo
  }
}
