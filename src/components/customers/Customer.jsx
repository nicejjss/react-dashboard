import ContentHeader from './content-header/ContentHeader';
import ContentArchivement from './content-archivement/ContentArchivement';
import ContentData from './content-data/ContentData';
import { Outlet } from 'react-router-dom';

const Customer = () => {
    return (
        <>
            <ContentHeader />
            <ContentArchivement />
            <ContentData />
        </>
    )
}

export default Customer;