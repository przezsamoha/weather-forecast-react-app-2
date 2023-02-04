import { ForecastProps } from '../types';

interface Props {
  data: ForecastProps;
}

interface DegreeProps {
  temp: number;
}

function Degree({ temp }: DegreeProps) {
  return (
    <span>
      {temp}
      <sup>o</sup>
    </span>
  );
}

// weather icon url: 'http://openweathermap.org/img/w/10d.png';

function Forecast({ data }: Props) {
  const today = data.list[0];

  return (
    <div className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px]">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black text-neutral-900">
            {data.name}
            <span className="font-thin">,{data.country}</span>
          </h2>
          <h1 className="text-4xl font-bold text-neutral-900">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <h3 className="text-neutral-800">{today.weather[0].main}</h3>
          <p className="text-neutral-800">
            from <Degree temp={Math.floor(today.main.temp_min)} /> to{' '}
            <Degree temp={Math.ceil(today.main.temp_max)} />
          </p>
        </section>

        <section className="flex overflow-x-scroll mt-4 pb-2 mb-5">
          {data.list.map((item, i) => (
            <div className="inline-block w-[50px] flex-shrink-0" key={i}>
              {/* TO FUTURE SELF: the below works to get hour from datetime */}
              <p className="text-xs text-neutral-400">
                {i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}
              </p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p className="text-sm font-medium pb-2">
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </section>
        <section className="grid grid-cols-2 gap-5">
          <div>
            <h1 className="flex text-2xl border rounded-md h-[140px] items-center text-center "></h1>
          </div>
          <div>
            <h1 className="flex text-2xl border rounded-md h-[140px] items-center text-center "></h1>
          </div>
          <div>
            <h1 className="flex text-2xl border rounded-md h-[140px] items-center text-center "></h1>
          </div>
          <div>
            <h1 className="flex text-2xl border rounded-md h-[140px] items-center text-center "></h1>
          </div>
          <div>
            <h1 className="flex text-2xl border rounded-md h-[140px] items-center text-center "></h1>
          </div>
          <div>
            <h1 className="flex text-2xl border rounded-md h-[140px] items-center text-center "></h1>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Forecast;
