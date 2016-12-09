import {dobro} from '..'
import { expect } from 'chai';

describe('Case exemplo', function() {
  it('2+2', function() {
    expect(dobro(3)).equals.to(6);
  });
}
