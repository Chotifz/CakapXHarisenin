// src/lib/api.js

export const fetchBannerData = async () => {
  const response = await fetch(
    "https://api-staging.cakap.com/v2/selfpaced/banner"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch banner data");
  }
  return await response.json();
};

export const fetchCoursesData = async () => {
  const response = await fetch(
    "https://api-staging.cakap.com/v3/selfpaced/course/highlight"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch course data");
  }
  return await response.json();
};
