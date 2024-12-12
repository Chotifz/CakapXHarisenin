import axiosInstance from "@/lib/axios";

export const fetchBanners = async () => {
  try {
    const response = await axiosInstance.get("/banner");
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching banners:",
      error.response?.data || error.message
    );
    return [];
  }
};

export const fetchCourses = async ({
  page = 1,
  limit = 10,
  categoriesId,
  courseOrderBy,
}) => {
  const params = {
    page,
    limit,
    ...(categoriesId && { categoriesId }),
    ...(courseOrderBy && { courseOrderBy }),
  };

  try {
    const response = await axiosInstance.get("/course/list", { params });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

export const fetchHighlightedCourses = async () => {
  try {
    const response = await axiosInstance.get("/course/highlight");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

export const fetchPartnersList = async ({ partnerType }) => {
  try {
    console.log("Fetching partners with partnerType:", partnerType);
    const response = await axiosInstance.get("/partner", {
      params: {
        partnerType,
        showAll: true,
      },
    });
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

export const fetchDetail = async (id, platform = "WEB") => {
  try {
    const response = await axiosInstance.get(
      `/course/detail/${id}?platform=${platform}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};


export const fetchSummary = async () => {
  try {
    const response = await axiosInstance.get("/rating/815/summary");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

export const fetchBannerBahasa = async () => {
  try {
    const response = await axiosInstance.get(
      "/whitelabel-setting/cakap/club-banner"
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

export const fetchFaqList = async ({ tenant = "cakap" }) => {
  try {
    const response = await axiosInstance.get("/faq", {
      params: {
        tenant,
      },
    });
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
  }

export const fetchClubList = async () => {
  try {
    const response = await axiosInstance.get(
      "https://api-staging.cakap.com/v2/cakap-group/club-list"
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};
