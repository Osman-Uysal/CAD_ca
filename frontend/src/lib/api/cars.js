// cars.js

import client from './client';

// get
export const getList = () => {
  return client.get('/cars');
};

// detail
export const getDetail = (id) => {
  return client.get(`/cars/${id}`);
};

// create
export const createCar = (params) => {
  return client.post('/cars', { car: params });
};

// update
export const updateCar = (id, params) => {
  return client.put(`/cars/${id}`, params);
};

// delete
export const deleteCar = (id) => {
  return client.delete(`/cars/${id}`);
};
