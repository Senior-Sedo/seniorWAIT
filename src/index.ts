const seniorWAIT = async (duration: number = 5000): Promise<void> => await new Promise((resolve) => setTimeout(resolve, duration));
export default seniorWAIT;