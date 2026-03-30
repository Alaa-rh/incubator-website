import { ResponsiveFunnel } from "@nivo/funnel";

const ProjectLifecycleChart = () => {
  const data = [
    { id: "تقديم", value: 80 },
    { id: "حضور المعسكر", value: 50 },
    { id: "محتضنة", value: 20 },
    { id: "متخرجة", value: 10 },
  ];

  const colors = ["#3872BB", "#2B95AD", "#45B48B", "#7AC27B"];

  return (
    <div className="bg-white w-170 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">إحصائيات دورة حياة المشاريع</h2>

      <div style={{ height: 250}}>
        <ResponsiveFunnel
          data={data}
          margin={{ top: 20, right: 60, bottom: 20, left: 60 }}
          direction="horizontal"
          shape="smooth"
          colors={colors}
          borderWidth={1}
          borderColor="#fff"
          labelColor="#ffff"
          valueFormat={(v) => `${v}`}
          layers={[
            "separators",
            "parts",
            "labels",
            (props) =>
              props.parts.map((part) => (
                <text
                  key={part.data.id}
                  x={part.x + part.width / 2}
                  y={part.y + part.height / 2}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#000"
                  fontSize={14}
                  fontWeight="600"
                >
                  {part.data.id} : {part.data.value}
                </text>
              )),
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectLifecycleChart;
