export default function guardrail(mathFunction) {
  const queue = [];
  let res;
  try {
    res = mathFunction();
  } catch (error) {
    res = `Error: ${error.message}`;
  }
  queue.push(res);
  queue.push('Gaurdrail was processed');

  return queue;
}
