/* eslint-disable */

import React from 'react';
import {shallow} from 'enzyme';

// import Word from '../../src/components/Hangman/Word';
// import HangingMan from '../../src/components/Hangman/HangingMan';
import InputGame from '../../src/components/Inputs/InputGame';

describe('InputGame', () => {
    it('renders', () => {
      expect(shallow(
        <InputGame onSubmit={sinon.stub()} text='Create RPS game' />
      )).to.exist;
    });


    it('InputGame has a button with text', () => {
        const form = shallow(<InputGame onSubmit={sinon.stub()} text='Create RPS game' />);
        expect(form).to.have.exactly(1).descendants('button');
        expect(form).to.contain.text('Create RPS game');
    });


  it('calls submit with author and text when submit button clicked', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<InputGame onSubmit={sinon.stub()} text='Create RPS game' />);

    //form.setState({type: 'type', play: 'play'});

    form.find('button').simulate('click');
    // simulate('click') in shallow rendering is equivalent to
    //   const button = form.find('button');
    //   button.props().onClick({target: button});
    // The simulated event will not propagate to parent elements.

    expect(onSubmit).to.have.been.calledWith({type: 'RPS', play: 'play'});
  });
});
