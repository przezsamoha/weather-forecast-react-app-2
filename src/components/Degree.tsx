export interface DegreeProps {
  temp: number;
}

export default function Degree({ temp }: DegreeProps) {
  return (
    <span data-testid="degree">
      {temp}
      <sup>o</sup>
    </span>
  );
}
