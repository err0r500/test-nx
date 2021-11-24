import { Inject } from '@nestjs/common';
import * as r from 'rtrim';

// we can use app specific dependencies
console.log(r('I print without exclamation mark !!!!!!', '!'));

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
