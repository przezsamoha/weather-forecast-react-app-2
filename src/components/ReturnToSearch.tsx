import ReturnIcon from './Icons/ReturnIcon';

interface ReturnToSearchProps {
  handleReset: () => void;
}

export default function ReturnToSearch({ handleReset }: ReturnToSearchProps) {
  return (
    <div className="object-left-top dark:text-neutral-100 ">
      <button
        onClick={handleReset}
        tabIndex={0}
        className="absolute m-5 top-0 left-0 flex space-x-2 align-center"
      >
        <ReturnIcon />
        <span className="font-medium text-md text-neutral-600 dark:text-neutral-300 ">
          back to search
        </span>
      </button>
    </div>
  );
}
