// Test away
import React from 'react';
import ReactDOM from 'react-dom';

import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';


afterEach(rtl.cleanup);
let wrapper;
let Unlocked =()=> wrapper.queryByText('Unlocked');
let Closed =()=> wrapper.queryByText('Closed');
let Opened =()=> wrapper.queryByText('Open');
let LockGate=()=> wrapper.queryByText('Lock Gate');
let OpenGate =()=> wrapper.queryByText('Open Gate');
beforeEach(()=>{
    wrapper = rtl.render(<Dashboard />)
})
it('renders without crashing', ()=>{
    // wrapper.debug();
    expect(wrapper.container).toMatchSnapshot();
} );
it('renders a "UnLocked" text node ', ()=>{
    expect(Unlocked()).toBeInTheDocument();
    expect(Unlocked()).toBeVisible();
});
it('renders a "Open" text node ', ()=>{
    expect(Opened()).toBeInTheDocument();
    expect(Opened()).toBeVisible();
})
