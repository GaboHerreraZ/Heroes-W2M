import { UpperCaseDirective } from './uppercase.directive';

describe('TitleDirective', () => {
  it('should create an instance', () => {
    const directive = new UpperCaseDirective();
    expect(directive).toBeTruthy();
  });
});
