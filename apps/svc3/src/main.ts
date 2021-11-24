import { Inject } from '@nestjs/common';

// we can use app use specific dependencies (even dynamically)
async function sayBla(){
  const r = await import('rtrim');
  console.log(r('I print without exclamation mark !!!!!!', '!'));
}
sayBla()

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
