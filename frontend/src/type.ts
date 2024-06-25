import React from "react";

export interface ImenuContainer {
  setMenuType: React.Dispatch<React.SetStateAction<string>>;
}

export interface IshopDetails {
  _id: string;
  image: string;
  name: string;
  location: string;
  miles: number;
  rating: number;
  review: number;
}

export interface IItemDetails {
  _id: string;
  category: string;
  description: string;
  image: string;
  name: string;
  price: number;
}
