import { useState, useId } from 'react';
import useFilters from '../hooks/useFilters';

export default function Filters() {
    const { filters, setFilters } = useFilters();

    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }));
    };

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }));
    };

    return(
        <section>
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input 
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId} >
                    Category
                </label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>
                        All
                    </option>
                    <option value='laptops'>
                        Laptops
                    </option>
                    <option value='smartphones'>
                        Smart Phones
                    </option>
                </select>
            </div>
        </section>
    );
}