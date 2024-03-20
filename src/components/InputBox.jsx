import PropTypes from 'prop-types';
import { useId, useMemo } from 'react';

const InputBox = ({
  label,
  value = 0,
  currencyOptions,
  selectedCurrency,
  onValueChange,
  onCurrencyChange,
  optionsDisabled = false,
  className = '',
}) => {
  const amountInputId = useId();

  const memoizedCurrencyOptions = useMemo(() => {
    return currencyOptions.map((currency) => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ));
  }, [currencyOptions]);

  return (
    <div className={`flex rounded-lg bg-white p-3 text-sm ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="mb-2 inline-block text-black/40">
          {label}
        </label>
        <input
          id={amountInputId}
          value={value}
          onChange={onValueChange ? (e) => onValueChange(Number(e.target.value)) : undefined}
          className="w-full bg-transparent py-1.5 outline-none"
          type="number"
          placeholder="Amount"
        />
      </div>
      <div className="flex w-1/2 flex-wrap justify-end text-right">
        <p className="mb-2 w-full text-black/40">Currency Type</p>
        <select
          value={selectedCurrency}
          onChange={onCurrencyChange ? (e) => onCurrencyChange(e.target.value) : undefined}
          disabled={optionsDisabled}
          className="cursor-pointer rounded-lg bg-gray-100 px-1 py-1 outline-none"
        >
          {memoizedCurrencyOptions}
        </select>
      </div>
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  onValueChange: PropTypes.func,
  selectedCurrency: PropTypes.string.isRequired,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionsDisabled: PropTypes.bool,
  className: PropTypes.string,
};

export default InputBox;
