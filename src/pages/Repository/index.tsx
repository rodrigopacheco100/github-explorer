import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// import { Container } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return <div>Repository:{params.repository}</div>;
};

export default Repository;
