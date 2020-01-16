export function Storage(initialStore,renderer) {

    let currentStore = initialStore;

    this.update = function (store) {
        console.log("old state", currentStore);
        currentStore = store;
        console.log("new state", currentStore);
        renderer(store);
    };

    this.getStore = function () {
        return currentStore;
    };

    this.update(currentStore);
}


export function InitialState () {
    return [
        {
            name: "Tom",
            date: "21.03.2020",
            content: "Lorem ipsum, or lipsum as it is sometimes known"
        },
        {
            name: "James",
            date: "21.03.2020",
            content: "Lorem ipsum, or lipsum as it is sometimes known"
        },
        {
            name: "Scott",
            date: "21.03.2020",
            content: "Lorem ipsum, or lipsum as it is sometimes known"
        },
        {
            name: "Tom James Scott",
            date: "21.03.2020",
            content: "Lorem ipsum, or lipsum as it is sometimes known"
        }
    ];

}
