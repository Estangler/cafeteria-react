import type { Items } from "../data/items";

export type CartItem = Items & {
  quantity: number;
};

export type Action =
  | {
      type: "ADD_ITEM";
      payload: Items;
    }
  | { type: "REMOVE_ITEM"; payload: Items }
  | { type: "DELETE_ITEM"; payload: Pick<Items, "id"> }
  | { type: "CLEAR_CART" };

export type AddItemAction = {
  type: "ADD_ITEM";
  payload: Items;
};

export type RemoveItemAction = {
  type: "REMOVE_ITEM";
  payload: Items;
};

export type DeleteItemAction = {
  type: "DELETE_ITEM";
  payload: Pick<Items, "id">;
};
