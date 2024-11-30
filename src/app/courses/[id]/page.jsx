"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CourseDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api-staging.cakap.com/v3/selfpaced/course/detail/${id}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  console.log(product?.data);
  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {id}</p>
      <p>Product Name: {product?.data.courseName}</p>
      <p>Product Price: ${product?.data.finalPrice}</p>
    </div>
  );
}
