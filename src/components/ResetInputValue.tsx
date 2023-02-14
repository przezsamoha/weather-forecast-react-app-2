import { SearchProps } from '../types';

import ResetIcon from './Icons/ResetIcon';

type ResetInputValueType = Omit<
  SearchProps,
  'city' | 'listOfCities' | 'handleInputChange' | 'handleSelectedCity'
>;

export default function ResetInputValue({ handleReset }: ResetInputValueType) {
  return (
    <button
      type="button"
      className="absolute top-2 right-2 w-6 h-6 stroke-neutral-400 hover:stroke-neutral-600"
      onClick={handleReset}
    >
      <ResetIcon />
    </button>
  );
}
