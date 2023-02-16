export interface DegreeProps {
  temp: number;
}

export default function Degree({ temp }: DegreeProps) {
  return (
    <span>
      {temp}
      <sup>o</sup>
    </span>
  );
}
