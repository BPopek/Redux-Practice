import { ComponentA } from './ComponentA';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { CHARACTER_LIST } from './constants';

describe('ComponentA', () => {
  it('Should render only a list of Jedi', () => {
  const props = {
    list: CHARACTER_LIST,
  };
  const wrapper = shallow(<ComponentA {...props} />);

  expect(toJson(wrapper)).toMatchInlineSnapshot(`
    <ul>
      <li
        key="0"
      >
        Luke Skywalker
      </li>
      <li
        key="1"
      >
        Obi-wan Kenobi
      </li>
    </ul>
  `);
  });
});