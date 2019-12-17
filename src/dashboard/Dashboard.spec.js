// Test away
import React from 'react';
import ReactDOM from 'react-dom';

import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';


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
    wrapper = rtl.render(<Dashboard />);
    
})
it('renders without crashing', ()=>{
    wrapper.debug();
    // expect(wrapper.container).toMatchSnapshot();
} );
describe('Dashboard component freshly rendered', ()=>{
    it('renders a "UnLocked" text node ', ()=>{
        expect(Unlocked()).toBeInTheDocument();
        expect(Unlocked()).toBeVisible();
    });
    it('renders a "Open" text node ', ()=>{
        expect(Opened()).toBeInTheDocument();
        expect(Opened()).toBeVisible();
    })
    it('renders a "Close Gate" text node ', ()=>{
        expect(CloseGate()).toBeInTheDocument();
        expect(CloseGate()).toBeVisible();
    })
    it('renders a "Lock Gate" text node and it\'s disable', ()=>{
        expect(LockGate()).toBeInTheDocument();
        expect(LockGate()).toBeVisible();
        expect(LockGate()).toBeDisabled();
    
    })

})
describe('Dashboard component when gate is close', () =>{
    it('clicking close makes close button disapear', ()=>{
        expect(CloseGate()).toBeVisible();
        rtl.fireEvent.click(CloseGate());
        expect(CloseGate()).toBe(null);
        expect(OpenGate()).toBeInTheDocument();
        expect(OpenGate()).toBeVisible();
        expect(LockGate()).toBeEnabled();
    })

})
describe('Dashboard component when gate is close and locked', () =>{
    it('clicking close makes close button disapear', ()=>{
        expect(CloseGate()).toBeVisible();
        rtl.fireEvent.click(CloseGate());
        expect(CloseGate()).toBe(null);
        expect(OpenGate()).toBeInTheDocument();
        expect(OpenGate()).toBeVisible();
        expect(LockGate()).toBeEnabled();
        rtl.fireEvent.click(LockGate());
        expect(OpenGate()).toBeDisabled();
    })

})


describe('Display component', ()=>{
    it('Renders "Closed" if closed prop is true and "Open" otherwise', ()=>{
        wrapper = rtl.render(<Display closed={true} />)
        expect(Opened()).toBeVisible();
        wrapper = rtl.render(<Display />)
        expect(Closed()).toBeVisible();
    })
    it('Renders "Locked" if locked prop is true and "Unlocked" otherwise', ()=>{
          expect(Unlocked()).toBeVisible();
          wrapper = rtl.render(<Display locked={true} />)
        expect(Locked()).toBeVisible();
        
    })

})
describe('Display component when locked and closed is true', ()=>{
    it('Has a className red-led if locked and closed',()=>{
        wrapper = rtl.render(<Display locked={true}  closed = {true}/>)
        expect(Locked()).toBeVisible();
        expect(Locked()).toHaveClass('red-led')
    });
    
})
describe('Display component when locked and closed is false', ()=>{
    it('Has a className green-led if locked and closed',()=>{
        expect(Unlocked()).toBeVisible();
        expect(Unlocked()).toHaveClass('green-led');
    });
    
})

