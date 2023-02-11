export interface DegreeProps {
  temp: number;
}

function Degree({ temp }: DegreeProps) {
  return (
    <span>
      {temp}
      <sup aria-label="degree celcius">o</sup>
    </span>
  );
}

export default Degree;
