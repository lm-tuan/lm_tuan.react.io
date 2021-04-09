import Service from '../../services';

export const fetchProjects= async () => {
  const response = await Service.get(`http://localhost:3001/projects`, (res : any) => res);
  return response;
};

export const fetchPhones= async () => {
    const response = await Service.get(`http://localhost:3001/phones`, (res : any) => res);
    return response;
};
