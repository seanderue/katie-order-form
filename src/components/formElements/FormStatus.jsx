import React from 'react'
import FormStatusBarSegment from './FormStatusBarSegment'

export default function FormStatus({pageNumber}) {

    return (
        <div className='FormStatus-container'>
            <div className='FormStatus-progress-container'>
                    <div className='FormStatus-step-container'> 
                        <div className={pageNumber >= 1 ? 'FormStatus-step-number-active' : 'FormStatus-step-number'}>1</div>
                        
                    </div>

                    <FormStatusBarSegment
                        triggered = {pageNumber >= 2} />
                    
                    <div className='FormStatus-step-container'> 
                        <div className={pageNumber >= 2 ? 'FormStatus-step-number-active' : 'FormStatus-step-number'}>2</div>
                        
                    </div>

                    <FormStatusBarSegment
                        triggered = {pageNumber >= 3} />

                    <div className='FormStatus-step-container'> 
                        <div className={pageNumber >= 3 ? 'FormStatus-step-number-active' : 'FormStatus-step-number'}>3</div>
                        
                    </div>    
            </div>
            <div className='FormStatus-text-container'>
                <div className='FormStatus-step'>
                    <p className='FormStatus-step-text'>Baked Good</p>
                </div>
                    <div className='FormStatus-text-spacer'></div>
                <div className='FormStatus-step'>
                    <p className='FormStatus-step-text'>Customization</p>
                </div>
                    <div className='FormStatus-text-spacer'></div>
                <div className='FormStatus-step'>
                    <p className='FormStatus-step-text'>Submit Order</p>
                </div>
            </div>
        </div>
  )
}
