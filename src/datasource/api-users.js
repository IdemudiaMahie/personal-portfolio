let apiURL = import.meta.env.VITE_APP_APIURL;
let endpoint = "/api/users/";

export const list = async () => {
    const res = await fetch(apiURL + endpoint);
    return await res.json();
};

export const getOne = async (id) => {
    const res = await fetch(apiURL + endpoint + id);
    return await res.json();
};

export const update = async (user, id) => {
    const res = await fetch(apiURL + endpoint + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });
    return await res.json();
};

export const remove = async (id) => {
    const res = await fetch(apiURL + endpoint + id, {
        method: "DELETE",
    });
    return await res.json();
};