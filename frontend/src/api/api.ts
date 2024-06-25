import { Axios } from "../axios/axios";

export const getAllShopDetails = async () => {
  try {
    const allShops = await Axios.get("/allshops");
    if (allShops.status === 200) {
      return allShops.data;
    } else {
      return [];
    }
  } catch (err) {
    console.log(err);
  }
};

export const findAllMenuWithShopId = async (id: string) => {
  try {
    const allMenu = await Axios.get(`/shopmenu/${id}`);
    return allMenu;
  } catch (err) {
    console.log(err);
  }
};

export const getShopDetailsByName = async (searchValue: string) => {
  try {
    const searchItems = await Axios.get(`/search?value=${searchValue}`);
    console.log();
    if (searchItems.data) {
      return searchItems.data;
    } else {
      return [];
    }
  } catch (err) {
    console.log(err);
  }
};
