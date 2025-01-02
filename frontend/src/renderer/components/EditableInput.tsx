import React, { FC } from 'react';

interface Props {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const EditableInput: FC<Props> = ({
  className = '',
  placeholder = '',
  value = '',
  onChange,
}) => {
  // Handle change event for the input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value); // Call the onChange prop if provided
    }
  };

  return (
    <input
      type="text" // Input type set to text
      className={`editable-input ${className}`} // Apply custom class names
      placeholder={placeholder} // Set placeholder text
      value={value} // Bind value to the input
      onChange={handleChange} // Handle change events
    />
  );
};

export default EditableInput;