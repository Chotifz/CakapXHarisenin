export const fetchBannerData = async () => {
  try {
    const response = await fetch(
      "https://api-staging.cakap.com/v2/selfpaced/banner"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch banner data");
    }
    return await response.json();
  } catch (error) {
    return null;
  }
};

export const fetchCoursesData = async () => {
  try {
    const response = await fetch(
      "https://api-staging.cakap.com/v3/selfpaced/course/highlight"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch course data");
    }
    return await response.json();
  } catch (error) {
    return null;
  }
};
