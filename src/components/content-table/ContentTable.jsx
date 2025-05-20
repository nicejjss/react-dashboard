import './ContentTable.css';
import ContentRow from './ContentRow';
import { useEffect, useState } from 'react';
import { RepositoryFactory } from '../../assets/data/Repository/RepositoryFactory';
import PropTypes from 'prop-types';

function ContentTable({ filteredData }) {

  const [data, setData] = useState({
    'data': [],
    'total': 0,
    'page': 1,
    'limit': 10
  });
  const repository = RepositoryFactory.getInstance().getRepository();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await repository.getUsers();
        setData(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (filteredData.name) {
        try {
          const users = await repository.getUsers(filteredData.name);
          setData(users);
        } catch (error) {
          console.error('Error fetching filtered data:', error);
        }
      }
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [filteredData]);

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

ContentTable.propTypes = {
  filteredData: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

export default ContentTable;