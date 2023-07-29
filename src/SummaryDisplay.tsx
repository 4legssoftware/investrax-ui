type SummaryDisplayProps = {
  data: {
    name: string;
    amount: number;
    percent: number;
  }[];
}

export const SummaryDisplay = (props: SummaryDisplayProps) => {
  const {data} = props;
  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Amount</th>
        <th>Percent</th>
      </tr>
      </thead>
      <tbody>
      {data.map((row) => (
        <tr key={row.name}>
          <td>{row.name}</td>
          <td>{row.amount}</td>
          <td>{row.percent}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default SummaryDisplay;