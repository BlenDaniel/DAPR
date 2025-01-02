import React, { FC } from 'react';

interface Props {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const EditableTextarea: FC<Props> = ({
  className = '',
  placeholder = '',
  value = '',
  onChange,
}) => {
  // Handle change event for the textarea
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event.target.value); // Call the onChange prop if provided
    }
  };

  return (
    <textarea
      className={`editable-textarea ${className}`} // Apply custom class names
      placeholder={placeholder} // Set placeholder text
      value={value} // Bind value to the textarea
      onChange={handleChange} // Handle change events
      rows={3} // Set default number of rows
    />
  );
};

export default EditableTextarea;