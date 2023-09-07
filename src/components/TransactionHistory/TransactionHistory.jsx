import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
  return (
   <table className={css.historyTransaction}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
   {items.map(({type, amount, currency, id}) => ( <tr key={id}> 
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>))}
     </tbody>
</table>
  )
}
