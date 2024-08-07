const StatisticsHeader = ({ totalDevices }: { totalDevices: number }) => (
  <div className="text-center mb-8">
    <h1 className="text-2xl font-bold text-gray-800 mb-2">통계 대시보드</h1>
    <h2 className="text-xl font-bold text-gray-800">총 검사한 기기: {totalDevices}대</h2>
  </div>
);

export default StatisticsHeader;
