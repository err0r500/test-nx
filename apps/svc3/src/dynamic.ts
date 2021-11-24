export async function exclamationMark(){
  const r = await import('rtrim');
  console.log(r('I print without exclamation mark !!!!!!', '!'));
}
