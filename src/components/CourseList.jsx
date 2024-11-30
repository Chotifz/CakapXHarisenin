import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCoursesThunk,
  selectCourses,
  selectLoading,
  selectHasMore,
} from "@/redux/coursesSlice";
import {
  fetchCategoriesThunk,
  selectCategories,
} from "@/redux/categoriesSlice";
import CourseCard from "@/components/CourseCard";
import FilterBar from "@/components/FilterBar";
import Loader from "@/components/Loader";
import { setSelectedCategory } from "@/store/courses/categoriesSlice";

function CourseList() {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  const categories = useSelector(selectCategories);
  const loading = useSelector(selectLoading);
  const hasMore = useSelector(selectHasMore);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        if (!loading && hasMore) {
          dispatch(fetchCoursesThunk());
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, dispatch]);

  return (
    <div>
      <FilterBar
        categories={categories}
        onFilterChange={(category) => dispatch(setSelectedCategory(category))}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {courses.map((course) => (
          <CourseCard key={course.courseId} course={course} />
        ))}
      </div>
      {loading && <Loader />}
      {!hasMore && (
        <p className="text-center text-gray-500">No more courses to load.</p>
      )}
    </div>
  );
}

export default CourseList;
