import { axiosInstanceGeo } from './axios.config';

type AutocompleteData = {
  name: string;
  sys: {
    country: string;
  };
};
export const getSuggestions = async (query?: string) => {
  try {
    const response = await axiosInstanceGeo.get('', {
      params: { q: query },
    });

    return response.data.list.map(
      ({ name, sys: { country } }: AutocompleteData) => {
        return { name, country };
      }
    );
  } catch (error) {
    throw new Error();
  }
};
