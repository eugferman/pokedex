const jsonService = async () => {
  const response = await fetch("http://localhost:3000/data.json");
  const tableTypes = await response.json();

  return tableTypes;
};
export default jsonService;