import {store} from "../components/app";

export const addComment = (name,date,content) => {
    const currentStore = store.getStore();
    const newStore = [{ name, date, content },...currentStore];
    store.update(newStore);
};


export const deleteComment = (index) => {
    debugger;
    console.log("dfs");
    const currentStore = store.getStore();
    const newStore = [...currentStore.slice(0, index), ...currentStore.slice(index + 1)];
    store.update(newStore);
};