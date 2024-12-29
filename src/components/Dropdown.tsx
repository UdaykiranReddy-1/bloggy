import { useState, useEffect , useRef } from 'react';

interface Option {
    value: string;
    label: string;
}

interface DropdownProps {
    options: Option[];
    defaultValue?: string;
    onValueChange: (value: string) => void;
}

function Dropdown({ options, defaultValue,onValueChange }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue || options[0]?.value);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (value: string) => {
        setSelectedValue(value);
        setIsOpen(false);
        onValueChange(value); // Call the callback function to pass the selected value
    };

    const dropdownRef = useRef<HTMLDivElement>(null);

    // This is to close the component whenever there is a click outside the component
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={dropdownRef} className="relative mb-2">
            <button
                onClick={toggleDropdown}
                className={`w-full border border-gray-600 ${selectedValue===defaultValue ? "text-[#9ca3af]" : "text-[#ededed]"} text-left p-2 rounded`}
            >
                {selectedValue}
            </button>
            {isOpen && (
                <ul className="absolute w-full bg-black shadow-md rounded mt-2 text-[#ededed] border border-gray-500">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => handleOptionSelect(option.value)}
                            className="cursor-pointer py-2 px-4 hover:bg-gray-600"
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;