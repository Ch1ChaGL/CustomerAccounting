import { $authHost, $host } from './index';

export const getAllCustomers = async () => {
  const response = await $host.get('api/customer');
  console.log(response.data);
  return response.data;
};
