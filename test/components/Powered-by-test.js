import React from 'react/addons';
import { expect } from 'chai';
import Poweredby from '../../src/components/Powered-by';
import * as packageJSON from '../../package.json';

describe('Powered by', () => {
  const { TestUtils } = React.addons;
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<Poweredby />);
  const poweredBy = shallowRenderer.getRenderOutput();

  it('should have a div as container', () => {
    expect(poweredBy.type).to.equal('div');
  });

  it('should render the deps list and "react" should be present', () => {
    const ul = poweredBy.props.children.filter(c => c.type === 'ul');
    const li = ul[0].props.children[1].props.children;

    expect(li).to.equal('react');
  });

  it('should display all the dependencies and dev dependencies', () => {
    const ul = poweredBy.props.children.filter(c => c.type === 'ul');
    const renderedDeps = ul[0].props.children.length;
    const npmDeps = Object.keys(packageJSON.dependencies).length + Object.keys(packageJSON.devDependencies).length;

    expect(renderedDeps).to.be.equal(npmDeps);
  });
});
