
import React from 'react';
import ReactDOM from 'react-dom';

import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';


afterEach(rtl.cleanup);
let wrapper;
let Unlocked =()=> wrapper.queryByText('Unlocked');
let Locked =()=> wrapper.queryByText('Locked');
let Closed =()=> wrapper.queryByText('Closed');
let Opened =()=> wrapper.queryByText('Open');
let LockGate=()=> wrapper.queryByText('Lock Gate');
let CloseGate =()=> wrapper.queryByText('Close Gate');
let OpenGate =()=> wrapper.queryByText('Open Gate');
beforeEach(()=>{
    wrapper = rtl.render(<Display />)
});
it('Renders without crashing', ()=>{
    wrapper.debug();
});
describe('Display component', ()=>{
        it('Renders "Closed" if closed prop is true and "Open" otherwise', ()=>{
            wrapper = rtl.render(<Display closed={true} />)
            expect(Opened()).toBeVisible();
            wrapper = rtl.render(<Display />)
            expect(Closed()).toBeVisible();
        })
        it('Renders "Locked" if locked prop is true and "Unlocked" otherwise', ()=>{
            
            wrapper = rtl.render(<Display locked={true} />)
            expect(Unlocked()).toBeVisible();
            wrapper = rtl.render(<Display />)
            expect(Locked()).toBeVisible();
            
        })
    
    })