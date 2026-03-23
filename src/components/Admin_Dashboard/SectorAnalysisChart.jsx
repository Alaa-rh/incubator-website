import { ResponsivePie } from "@nivo/pie";

const SectorAnalysisChart = () => {
  const data = [
    { id: "تقنية", value: 40, color: "#38AC8D" },
    { id: "صحة", value: 15, color: "#7AC27B" },
    { id: "تعليم", value: 20, color: "#2295B1" },
    { id: "تجارة", value: 25, color: "#3B71BA" },
  ];

  return (
    <div className="bg-white p-6 w-110 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">تحليل القطاعات</h2>

      <div style={{ height: 250 }}>
        <ResponsivePie
          data={data}
          margin={{ top: 20, right: 60, bottom: 40, left: 40 }}
          innerRadius={0.4}
          padAngle={1}
          cornerRadius={3}
          colors={{ datum: "data.color" }}
          borderWidth={1}
          borderColor="#fff"
          enableArcLabels={true}
          arcLabelsTextColor="#ffff"
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#000"
          arcLinkLabelsThickness={0}
          arcLinkLabelsColor={{ from: "color" }}
          legends={[
            {
              anchor: "right",
              direction: "column",
              translateY: 30,
              itemWidth: 100,
              itemHeight: 30,
              symbolSize: 18,
              padding: -120,
              symbolShape: "circle",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SectorAnalysisChart;
