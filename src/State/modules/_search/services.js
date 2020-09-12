import constants from '../../utils/constants';

export const search = async (query) => {
  try {
    const response = await fetch(
      constants.apiUrl + `/search?query=${query}`
    );
    const data = await response.json();
    return data;
  } catch (error) {}
};
