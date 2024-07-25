export const fetchTotalDevices = async (): Promise<number> => {
  // Commented out the actual API call for now
  // const response = await fetch('http://172.16.156.67:8520/inspection/total');
  // const data = await response.json();
  // return data.totalDevices;

  // Temporary hardcoded data
  const data = { totalDevices: 1000 };
  return data.totalDevices;
};

export const fetchDefectCount = async (defectType: string, date: string): Promise<number> => {
  // Commented out the actual API call for now
  // const response = await fetch(`http://172.16.156.67:8520/inspection/count?defect=${defectType.toUpperCase()}&date=${date}`, {
  //   method: 'GET',
  //   headers: {
  //     'Accept': '*/*'
  //   }
  // });
  // if (!response.ok) {
  //   throw new Error(`Error: ${response.statusText}`);
  // }
  // const result = await response.json();
  // return result.data.number || 0;

  // Temporary hardcoded data
  const defectCounts: { [key: string]: number } = {
    OIL: 50,
    SCRATCH: 30,
    STAIN: 20,
  };
  return defectCounts[defectType.toUpperCase()] || 0;
};
