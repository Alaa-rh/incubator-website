import { ResponsiveBar } from "@nivo/bar";

const ExpertiseFieldsChart = () => {
  const data = [
    { name: "استشارات مالية", value: 40, color: "#3A75BB" },
    { name: "تطوير أعمال", value: 30, color: "#2C96AE" },
    { name: "تسويق", value: 20, color: "#3FAC8D" },
    { name: "برمجة", value: 10, color: "#6ABE80" },
  ];

  return (
    <div className="bg-white w-110 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">مجالات الخبرة</h2>

      <div style={{ height: 250 }}>
        <ResponsiveBar
          data={data}
          keys={["value"]}
          indexBy="name"
          layout="vertical"
          margin={{ top: 20, right: 40, bottom: 60, left: 40 }}
          padding={0.3}
          colors={{ datum: "data.color" }}
          borderRadius={6}
          enableLabel={true}
          labelTextColor="#ffff"
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -10,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
          }}
          tooltip={({ data }) => (
            <div
              style={{
                padding: "6px 10px",
                background: "white",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            >
              <strong>{data.name}</strong>: {data.value}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default ExpertiseFieldsChart;
