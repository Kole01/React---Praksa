import http from "../http-common";

const getAll = () => {
  return http.get("/Customer");
};

const create = data => {
  return http.post("/Customer", data);
};

const update = (id, data) => {
  return http.put(`/Customer/${id}`, data);
};

const remove = id => {
  return http.delete(`/Customer/${id}`);
};
const get = id => {
  return http.get(`/Customer/${id}`);
};


const Service = {
  getAll,
  get,
  create,
  update,
  remove
};




export default Service;