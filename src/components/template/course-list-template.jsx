"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setCategories,
  setSelectedCategory,
} from "@/store/courses/categoriesSlice";
import {
  fetchCoursesThunk,
  incrementPage,
  resetCourses,
  setCourses,
  setFilter,
  setOrderBy,
} from "@/store/courses/coursesListSLice";
import FilterBar from "../fragments/filter-bar";
import CourseCard from "../fragments/course-card";
import Loader from "../fragments/loader";
import { fetchCourses } from "@/lib/api";

const CourseListsTemplate = ({ initialCategories, initialCourses }) => {
  const dispatch = useDispatch();
  const {
    list: courses,
    page,
    hasMore,
    loading,
    filters: { orderBy, prakerjaFilter },
  } = useSelector((state) => state.courses);

  const { selectedCategory } = useSelector((state) => state.categories);

  const filteredCourses = courses.filter((course) => {
    if (prakerjaFilter) {
      return course.isSupportPrakerja;
    }
    return true;
  });

  const handleCategoryChange = async (sCategory) => {
    dispatch(resetCourses());
    dispatch(setSelectedCategory(sCategory));
    const data = await fetchCourses({
      page: 1,
      limit: 15,
      filters: { categoriesId: sCategory },
    });
    dispatch(setCourses(data?.data));
  };

  const handleOrderChange = async (orderSelect) => {
    dispatch(resetCourses());
    dispatch(setOrderBy(orderSelect));
    const data = await fetchCourses({
      page: 1,
      limit: 15,
      filters: { categoriesId: selectedCategory, courseOrderBy: orderSelect },
    });
    dispatch(setCourses(data?.data));
  };

  const handleFilterPrakerjaChange = async () => {
    dispatch(resetCourses());
    dispatch(setFilter({ prakerjaFilter: !prakerjaFilter }));

    const updatedPrakerjaFilter = prakerjaFilter;
    dispatch(
      fetchCoursesThunk({
        page: 1,
        limit: 15,
        filters: {
          orderBy,
          isSupportPrakerja: updatedPrakerjaFilter,
          categoriesId: selectedCategory,
        },
      })
    );
  };

  const handleScroll = () => {
    const isNearBottom =
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 900;
    if (isNearBottom && !loading && hasMore) {
      dispatch(incrementPage());
      dispatch(
        fetchCoursesThunk({
          page,
          limit: 15,
          filters: {
            orderBy,
            isSupportPrakerja: prakerjaFilter,
            categoriesId: selectedCategory,
          },
        })
      );
    }
  };

  useEffect(() => {
    dispatch(setCategories(initialCategories));
    dispatch(setCourses(initialCourses));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading, page, dispatch, orderBy]);

  return (
    <section className="max-w-7xl w-full mx-auto px-4">
      <FilterBar
        categories={initialCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        onOrderChange={handleOrderChange}
        orderBy={orderBy}
        filterPrakerjaChecked={prakerjaFilter}
        onFilterPrakerjaChange={handleFilterPrakerjaChange}
      />
      {courses.length ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10 pb-5">
          {filteredCourses.map((course, index) => (
            <CourseCard key={`${course.courseId}-${index}`} course={course} />
          ))}
        </div>
      ) : (
        <div className="pt-10">
          {" "}
          <Loader />
        </div>
      )}

      {loading && <Loader />}
    </section>
  );
};

export default CourseListsTemplate;
