import { damageData } from '../../types/statistics';

const StatisticTable = ({ data }: { data: damageData }) => {
  return (
    <table className="w-full border-collapse text-center">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2 bg-gray-100 font-bold">
            등급
          </th>
          <th className="border border-gray-300 p-2 bg-gray-100 font-bold">
            수량
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.name}>
            <td className="border border-gray-300 p-2">{item.name} 등급</td>
            <td className="border border-gray-300 p-2">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StatisticTable;
