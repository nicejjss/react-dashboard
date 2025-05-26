import './ContentRow.css';

function ContentRow({ item }) {
    return (
        <tr>
          <td>{item.name}</td>
          <td>{item.company}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td>{item.country}</td>
          <td className="data-status">
            <span className={`status ${item.status? 'active' : 'inactive'}`}>{item.status? 'Active' : 'Inactive'}</span>
          </td>
        </tr>
    )
}

export default ContentRow;