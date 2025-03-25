import React, { useState } from 'react'
import Icon from '../atoms/Icon'
import { connect } from 'react-redux';
import { setStartDate, setEndDate } from '../../redux/actions';

function DateFilter({startDate, endDate, setStartDate, setEndDate}) {
    const [showDateFilter, setShowDateFilter] = useState(false);

    function handleClick(){
        setShowDateFilter(!showDateFilter);
    }

    return (
        <>
            <div className='date-filter flex-row'>
                <div className='line'></div>
                <span>Sort by: Date Range</span>
                <Icon iconName='caret-down-fill' size='12px' onClick={handleClick}></Icon>
            </div>

            {showDateFilter && (
                <div className='date-filter-form page-component flex-row'>
                    <div className='date-input flex-row'>
                        <label htmlFor="">Start date : </label>
                        <input type="date" value={startDate} onChange={(e) => {setStartDate(e.target.value)}}/>
                    </div>
                    
                    <div className='date-input flex-row'>
                        <label htmlFor="">End date : </label>
                        <input type="date" value={endDate} onChange={(e) => {setEndDate(e.target.value)}}/>
                    </div>
                </div>
            )}
        </>
    )
}

const mapStateToProps = (state) => ({
    startDate: state.search.startDate,
    endDate: state.search.endDate,
});

const mapDispatchToProps = {
    setStartDate,
    setEndDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateFilter);