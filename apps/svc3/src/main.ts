import { Inject } from '@nestjs/common';
import twas from 'twas';

// we can use app specific dependencies
console.log(twas(Date.now() - (5 * 1000)));

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
