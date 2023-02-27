import ReturnIcon from "./Icons/ReturnIcon";

interface ReturnToSearchProps {
  handleReset: () => void;
}

export default function ReturnToSearch({ handleReset }: ReturnToSearchProps) {
  return (
    <div className=" object-left-top">
      <button
        type="button"
        aria-label="Return to search field"
        onClick={handleReset}
        className="button fixed m-5 top-0 left-0 flex space-x-2 align-center"
      >
        <ReturnIcon />
      </button>
    </div>
  );
}
