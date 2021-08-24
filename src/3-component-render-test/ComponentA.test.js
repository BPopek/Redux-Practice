import { ComponentA } from './ComponentA';
import { shallow } from 'enzyme';

/*
Task:
- Fix the failed unit test
*/
describe('ComponentA', () => {
  it('Should render component successfully', () => {
    const props = {
      isVisible: true,
    };
    const wrapper = shallow(<ComponentA {...props} />);

    expect(wrapper.isEmptyRender()).toBe();
  });

  it('Should render empty', () => {
    const wrapper = shallow(<ComponentA />);

    expect(wrapper.isEmptyRender()).toBe();
  });

  it('Should verify the rendered text of the component', () => {
    const props = {
      isVisible: true,
    };
    const wrapper = shallow(<ComponentA {...props} />);

    expect(wrapper.find('p')).toHaveLength(2);
    expect(wrapper.find('p').text()).toEqual('Component B');
  });
});