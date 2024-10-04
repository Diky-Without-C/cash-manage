export default function transformArray(arr: number[]) {
  let sum = 0;
  return arr.reduce((result: number[], num) => {
    sum += num;
    result.push(sum);
    return result;
  }, []);
}
