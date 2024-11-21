// factorial_spec.js
describe('factorial function', () => {
  it('should calculate factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should calculate factorial of 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should calculate factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });

  it('should handle negative numbers', () => {
    expect(() => factorial(-1)).toThrowError();
  });
});