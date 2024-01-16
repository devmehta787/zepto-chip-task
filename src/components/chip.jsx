import React, { useState } from 'react';
import './chip.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const ChipComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [chips, setChips] = useState([]);
    const items = [
        "Olivia",
        "Liam",
        "Emma",
        "Noah",
        "Ava",
        "Ethan",
        "Sophia",
        "Jackson",
        "Isabella",
        "Aiden",
        "Mia",
    ];
    
    const updateChips = () => {
        if (inputValue.trim() === '') return [];
        const filteredItems = items.filter(item => !chips.includes(item) && item.toLowerCase().includes(inputValue.toLowerCase()));
        return filteredItems;
    };
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    
    
    const handleChipClick = (item) => {
        setChips([...chips, item]);
        setInputValue('');
    };
    
    const handleRemoveChip = (item) => {
        const updatedChips = chips.filter(chip => chip !== item);
        setChips(updatedChips);
    };
    
    
    return (
        <div className="chip-container">
            <div className="selected-chip-container">
                <div className="selected-chips">
                    {chips.map(item => (
                        <div key={item} className="chip">
                            {item}
                            <span className="chip-remove" onClick={() => handleRemoveChip(item)}><FontAwesomeIcon icon={faXmark}/></span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="input-suggestion">
                <div className="input">
                    <input
                        className="chip-input"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Type any name from the list below..."
                    />
                </div>
                <div className="suggested-chip">
                    {inputValue.trim() !== '' && (
                        <div className="chip-list">
                            {updateChips().map(item => (
                                <div key={item} className="chip" onClick={() => handleChipClick(item)}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="all-chip">
                <div className="list-top">
                    <span className="list-title">Type one of the names from the below list</span>
                </div>
                <div className="list-bottom">
                    {items.map(item => (
                        <div key={item} className="chip-data">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChipComponent;