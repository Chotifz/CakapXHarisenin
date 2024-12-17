import axiosInstance from "@/lib/axios";
import axios from "axios";

export const fetchBanners = async () => {
  try {
    const response = await axiosInstance.get("/banner");
    return response.data;
  } catch (error) {
    console.error("API Error:", error.message);
    return [];
  }
};

export const fetchCourses = async ({ page = 1, limit = 10, filters = {} }) => {
  const params = {
    page,
    limit,
    ...filters,
  };

  try {
    const response = await axiosInstance.get("/course/list", { params });
    return response.data;
  } catch (error) {
    console.error("API Error:", error.message);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories");
    return response.data;
  } catch (error) {
    console.error("API Error:", error.message);
    return [];
  }
};

export const fetchHighlightedCourses = async () => {
  try {
    const response = await axiosInstance.get("/course/highlight");
    return response.data;
  } catch (error) {
    console.error("API Error:", error.message);
    return [];
  }
};

export const fetchPartnersList = async ({ partnerType, showAll, limit }) => {
  try {
    const response = await axiosInstance.get("/partner", {
      params: {
        partnerType,
        showAll,
        limit,
      },
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error.message);
    return [];
  }
};

export const fetchDetail = async (id, platform = "WEB") => {
  try {
    const response = await axiosInstance.get(
      `/course/detail/${id}?platform=${platform}`
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error.message);
    return [];
  }
};

export const fetchSummary = async (id) => {
  try {
    const response = await axiosInstance.get(`/rating/${id}/summary`);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.message);
    return [];
  }
};

export const fetchBannerBahasa = async () => {
  try {
    const response = await axiosInstance.get(
      "/whitelabel-setting/cakap/club-banner"
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error.message);
    return [];
  }
};

export const fetchFaqList = async ({ tenant = "cakap" }) => {
  try {
    const response = await axiosInstance.get("/faq", {
      params: {
        tenant,
      },
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error.message);
    return [];
  }
};

export const fetchClubList = async () => {
  try {
    const response = await axios.get(
      "https://api-staging.cakap.com/v2/cakap-group/club-list"
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error.message);
    return [];
  }
};

export const fetchSimiliarCourse = async ({ categoriesId, id }) => {
  try {
    const response = await axiosInstance.get(
      `/course/recommendations/${categoriesId}`,
      {
        params: {
          courseId: id,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error.message);
    return [];
  }
};

export const fetchJobList = async () => {
  try {
    const response = await axios.get(
      "https://career-staging.cakap.com/wp-json/custom/v1/jobs"
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error.message);
    return [];
  }
};
