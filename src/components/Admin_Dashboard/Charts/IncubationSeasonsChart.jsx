import { ResponsiveBar } from "@nivo/bar";

const IncubationSeasonsChart = () => {
  const data = [
    { season: "الموسم 1", incubated: 10, graduated: 5 },
    { season: "الموسم 2", incubated: 7, graduated: 6 },
    { season: "الموسم 3", incubated: 9, graduated: 5 },
    { season: "الموسم 4", incubated: 8, graduated: 8 },
  ];

  return (
    <div className="bg-white w-170 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">مقارنة أداء مواسم الاحتضان</h2>

      <div style={{ height: 250 }}>
        <ResponsiveBar
          data={data}
          keys={["incubated", "graduated"]}
          indexBy="season"
          margin={{ top: 20, right: 30, bottom: 40, left: 40 }}
          padding={0.3}
          colors={({ id }) =>
            id === "incubated" ? "#62BB86" : "#3A73B8"
          }
          
         
          labelSkipWidth={16}
          labelSkipHeight={16}
          labelTextColor="#ffff"
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
          }}
          tooltip={({ id, value, color }) => (
            <div
              style={{
                padding: "6px 10px",
                background: "white",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            >
              <strong style={{ color }}>{id}</strong>: {value}
            </div>
          )}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom",
              direction: "row",
              translateY: 40,
              itemWidth: 100,
              itemHeight: 20,
              symbolSize: 14,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default IncubationSeasonsChart;
