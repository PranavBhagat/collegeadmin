import { AddexamModule } from './addexam.module';

describe('AddexamModule', () => {
  let addexamModule: AddexamModule;

  beforeEach(() => {
    addexamModule = new AddexamModule();
  });

  it('should create an instance', () => {
    expect(addexamModule).toBeTruthy();
  });
});
