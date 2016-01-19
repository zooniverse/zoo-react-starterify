import React from 'react/addons';
import { expect } from 'chai';
import App from '../../src/components/App';
import * as packageJSON from '../../package.json';

describe('App', () => {
  const { TestUtils } = React.addons;
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<App />);
  const app = shallowRenderer.getRenderOutput();

  it('should have a div as container', () => {
    expect(app.type).to.equal('div');
  });

  it('should have a version number that match the package.json version property', () => {
    const version = packageJSON.version;
    const h1 = app.props.children[0].props.children;

    expect(h1).to.include(<h1 className="title">React Starterify {version}</h1>);
  });

  it('should return something', () => {
    const returnSomething = App.prototype.returnSomething('hello!');

    expect(returnSomething).to.be.equal('hello!');
  });
});
