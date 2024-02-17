import { useId } from 'react';
import useFilters from '../hooks/useFilters';
import { Select, SelectItem } from '@nextui-org/react';

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

    const categories = [
        {
            value: "all",
            label: "All"
        },
        {
            value: "laptops",
            label: "Laptops"
        },
        {
            value: "smartphones",
            label: "Smartphones"
        },
        {
            value: "home-decoration",
            label: "Home decoration"
        },
        {
            value: "fragrances",
            label: "Fragrances"
        },
        {
            value: "skincare",
            label: "Skincare"
        },
        {
            value: "groceries",
            label: "Groceries"
        }
    ];

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 p-10 gap-6 text-[18px]">
            <div className="flex gap-4 items-center">
                <label htmlFor={minPriceFilterId} className="font-bold">Price</label>
                <input
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span className="text-zinc-600">${filters.minPrice}</span>
            </div>
            <div className="flex gap-4 items-center md:justify-end">
                <label htmlFor={categoryFilterId} className="font-bold">
                    Category
                </label>
                <Select
                    size='sm'
                    variant='bordered'
                    label="Select an category"
                    className="w-[300px]"
                    id={categoryFilterId}
                    onChange={handleChangeCategory}
                >
                    {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                            {category.label}
                        </SelectItem>
                    ))}
                </Select>
            </div>
        </section>
    );
};