import React from 'react';
import {shallow} from 'enzyme';

import InputGame from '../../src/components/Inputs/InputGame';
import InputChangesOnChange from '../../src/components/Inputs/InputChangesOnChange';
import InputChangesOnSubmit from '../../src/components/Inputs/InputChangesOnSubmit';

describe('InputGame', () => {
    it('renders', () => {
      expect(shallow(
        <InputGame onSubmit={sinon.stub()} text='Create RPS game' />
      )).to.exist;
    });

    it('InputGame has a buttons with text', () => {
        const form = shallow(<InputGame onSubmit={sinon.stub()} text='Create RPS game' />);
        expect(form).to.have.exactly(1).descendants('button');
        expect(form).to.contain.text('Create RPS game');
    });


  it('click Create RPS game', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<InputGame onSubmit={onSubmit} text='Create RPS game' />);
    form.find('button').simulate('click');
    expect(onSubmit).to.have.been.calledWith({type: 'RPS', play: {status: 'waiting_for_move'}});
  });
});


describe('InputChangesOnChange', () => {
  it('renders', () => {
    expect(shallow(
      <InputChangesOnChange onSubmit={sinon.stub()} type='text' maxLength={1} />
    )).to.exist;
  });


  it('write to Hangman game', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<InputChangesOnChange onSubmit={onSubmit} type='text' maxLength={1} />);
    form.find('input').simulate('change', {target: {value: 'a'}});
    form.find('input').simulate('keyup', {key: 'a'});
    expect(onSubmit).to.have.been.calledWith('a');
  });
});

describe('InputChangesOnSubmit', () => {
  it('renders', () => {
    expect(shallow(
      <InputChangesOnSubmit onSubmit={sinon.stub()} type='text' maxLength={1} />
    )).to.exist;
  });


  it('write to RPS game', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<InputChangesOnSubmit onSubmit={onSubmit} type='text' maxLength={1} />);
    form.find('input').simulate('change', {target: {value: 'a'}});
    form.find('input').simulate('keyup', {keyCode: 13});
    expect(onSubmit).to.have.been.calledWith('A');
  });

  it('clears state when submited', () => {
    const form = shallow(<InputChangesOnSubmit onSubmit={sinon.stub()} type='text' maxLength={1} />);
    form.setState({value: 'value'});
    form.find('input').simulate('keyup', {keyCode: 13});
    expect(form.state()).to.eql({value: ''});
  });
});
