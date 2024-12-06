import axiosInstance from "@/lib/axios";

export const fetchBanners = async () => {
  const API_URL = `${process.env.NEXT_PUBLIC_BASE_URLV2}/banner`;
  try {
    const response = await fetch(API_URL, { next: { revalidate: 6 } });
    if (!response.ok) {
      throw new Error(`Failed to fetch banners, status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching banners:", error);
    return [];
  }
};

export const fetchDetailCourse = async () => {};

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
