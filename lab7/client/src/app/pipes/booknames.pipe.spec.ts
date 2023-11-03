import { BooknamesPipe } from './booknames.pipe';

describe('BooknamesPipe', () => {
  it('create an instance', () => {
    const pipe = new BooknamesPipe();
    expect(pipe).toBeTruthy();
  });
});
