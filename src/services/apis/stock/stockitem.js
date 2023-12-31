import axiosInstance from "@/services/utils/axiosInstance";

  export default {
    async updateStockById(id, updateStock) {  
      try {
        const res = await axiosInstance.patch(`/stockings/${id}`, updateStock);
        console.log(res);
        return res.data.data;
      } catch (error) {
        console.log("update errrr");
        console.log(error);
        throw error.response.data;
      }
    },
  
    async getAllStocks({ page, pageSize, roleId, search }) {
      let query = `page=${page}&pageSize=${pageSize}`;
      if (search || search === "0") {
        query += `&search=${search}`;
      }
      try {
        const res = await axiosInstance.get(`/stockings?${query}`);
        return res.data;
      } catch (error) {
        // console.log(error);
      }
    },
    async getStockById(id) {
      try {
        const res = await axiosInstance.get(`/stockings/${id}?includeDetail=true`);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getStockingItemById(id) {
      try {
        const res = await axiosInstance.get(`/stocking-items/${id}?includeDetail=true`);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateStockingItemById(id, updateStockingItem) {  
      try {
        const res = await axiosInstance.patch(`/stocking-items/${id}`, updateStockingItem);
        console.log(res);
        return res.data.data;
      } catch (error) {
        console.log("update errrr");
        console.log(error);
        throw error.response.data;
      }
    },
    async deleteStockingItemById(id) {
      try {
        const res = await axiosInstance.delete(`/stocking-items/${id}`);
        return res.data;
      } catch (error) {
        throw error.response.data;
      }
    },
    async deleteStockById(id) {
      try {
        const res = await axiosInstance.delete(`/stockings/${id}`);
        return res.data;
      } catch (error) {
        throw error.response.data;
      }
    },
  };
