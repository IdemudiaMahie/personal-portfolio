let apiURL = import.meta.env.VITE_APP_APIURL;
let endpoint = "/api/references/";

export const list = async () => {
    const res = await fetch(apiURL + endpoint);
    return await res.json();
};

export const create = async (item) => {
    const res = await fetch(apiURL + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    });
    return await res.json();
};

export const update = async (item, id) => {
    const res = await fetch(apiURL + endpoint + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    });
    return await res.json();
};

export const remove = async (id) => {
    const res = await fetch(apiURL + endpoint + id, {
        method: "DELETE",
    });
    return await res.json();
};

export const getOne = async (id) => {
    const res = await fetch(apiURL + endpoint + id);
    return await res.json();
};