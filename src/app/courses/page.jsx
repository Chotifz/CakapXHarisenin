"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseCard from "@/components/CourseCard";
import FilterBar from "@/components/FilterBar";
import Loader from "@/components/Loader";
import {
  fetchCategoriesThunk,
  setSelectedCategory,
} from "@/store/courses/categoriesSlice";
import {
  fetchCoursesThunk,
  incrementPage,
  resetCourses,
  setOrderBy,
} from "@/store/courses/coursesListSLice";
import { useRouter } from "next/navigation";

export default function CourseListPage() {
  const dispatch = useDispatch();
  const {
    list: courses,
    page,
    hasMore,
    loading,
  } = useSelector((state) => state.courses);

  const { list: categories, selectedCategory } = useSelector(
    (state) => state.categories
  );

  const { orderBy } = useSelector((state) => state.courses);
  console.log(orderBy);
  const handleFilterChange = (selectedCategory) => {
    dispatch(resetCourses());
    dispatch(setSelectedCategory(selectedCategory));
    dispatch(
      fetchCoursesThunk({ page: 1, limit: 10, categoriesId: selectedCategory })
    );
  };
  const handleOrderChange = (orderBy) => {
    dispatch(resetCourses());
    dispatch(setOrderBy(orderBy));
    dispatch(
      fetchCoursesThunk({
        page: 1,
        limit: 10,
        categoriesId: selectedCategory,
        courseOrderBy: orderBy,
      })
    );
  };

  const router = useRouter();

  const handleCourseClick = (id) => {
    router.push(`/courses/${id}`);
  };

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
    dispatch(
      fetchCoursesThunk({ page: 1, limit: 10, categoriesId: selectedCategory })
    );
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        if (!loading && hasMore) {
          dispatch(incrementPage());
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, dispatch]);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchCoursesThunk({ page, limit: 10 }));
    }
  }, [page, selectedCategory, dispatch]);

  console.log(courses);
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onFilterChange={handleFilterChange}
          onOrderChange={handleOrderChange}
          orderBy={orderBy}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10 border-t border-t-slate-500">
          {courses.map((course, index) => (
            <CourseCard
              key={`${course.courseId}-${index}`}
              course={course}
              onClickChange={handleCourseClick}
            />
          ))}
        </div>
        {loading && <Loader />}
        {!hasMore && (
          <p className="text-center text-gray-500">No more courses to load.</p>
        )}
      </div>
    </div>
  );
}
