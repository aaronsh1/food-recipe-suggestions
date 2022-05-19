import config from '../../config.json';

const backendUrl = config.backendUrl;

export const Endpoints = {
  Login: 'login',
};

export const HttpMethods = {
  Get: 'GET',
  Post: 'POST',
  Delete: 'DELETE',
  Put: 'PUT',
}

export const fetchApi = async ({
  endpoint,
  method = HttpMethods.Get,
  data = {},
  token = undefined,
}) => {
  const response = await fetch(`${backendUrl}/${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: (method !== HttpMethods.Get && JSON.stringify(data)) || undefined,
  });

  const json = await response.json();
  return {
    data: json,
    status: response.status,
  };
};