import { AddcolModule } from './addcol.module';

describe('AddcolModule', () => {
  let addcolModule: AddcolModule;

  beforeEach(() => {
    addcolModule = new AddcolModule();
  });

  it('should create an instance', () => {
    expect(addcolModule).toBeTruthy();
  });
});
