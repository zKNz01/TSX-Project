import React from 'react';

const labelStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 'var(--gap-s)',
  fontWeight: '600',
  fontSize: 'var(--gap)',
  backgroundColor: 'var(--color-02)',
  borderRadius: 'var(--gap-s)',
  padding: 'var(--gap-s)',
};

type IDateInput = React.ComponentProps<'input'> & {
  label: string;
};

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input id={label} name={label} type="date" {...props} />
    </div>
  );
};

export default DateInput;
