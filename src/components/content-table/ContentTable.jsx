import './ContentTable.css';
import ContentRow from './ContentRow';
import { useEffect } from 'react';
import { RepositoryFactory } from '../../assets/data/Repository/RepositoryFactory';

function ContentTable({ filteredData, data , setData, page}) {

  const repository = RepositoryFactory.getInstance().getRepository();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await repository.getUsers(filteredData.name, page);
        setData(users);
      } catch (error) {
        console.error('Error fetching filtered data:', error);
      }
    };

    fetchData();
  }, [filteredData, page]);

  return (
    <table id="content-data-table">
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Company</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th className="head-status">Status</th>
                        </tr>
                    </thead>
                    <tbody id="content-data-body">
                      {data.data.map((item) => (
                        <ContentRow key={item.email} item={item} />
                      ))}
                    </tbody>
                </table>
  )
}

export default ContentTable;