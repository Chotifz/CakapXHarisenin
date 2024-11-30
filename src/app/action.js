"use server";

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
