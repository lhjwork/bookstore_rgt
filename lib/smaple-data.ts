import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "Jane",
      email: "jane@example.com",
      password: hashSync("123456", 10),
      role: "user",
    },
  ],
  products: [
    {
      name: "판타지 소설",
      slug: "/fantasy-novel",
      category: "Books",
      images: ["/assets/images/p1-1.jpeg", "/assets/images/p1-2.jpeg"],
      price: "30000",
      brand: "우리서점",
      rating: "4.5",
      numReviews: 10,
      stock: 5,
      description: "신비로운 판타지의 세계로",
      isFeatured: true,
      banner: "/assets/images/banner-1.jpeg",
    },
    {
      name: "테니스 교실",
      slug: "/tennis-class",
      category: "sports",
      images: ["/assets/images/p2-1.jpeg", "/assets/images/p2-2.jpeg"],
      price: "32000",
      brand: "nike",
      rating: "4.2",
      numReviews: 8,
      stock: 10,
      description: "테니스 교실에서 배우는 테니스의 모든 것",
      isFeatured: true,
      banner: "/assets/images/banner-2.jpeg",
    },
    {
      name: "하하엄마의 하하하",
      slug: "/haha-mom",
      category: "Track Pants",
      images: ["/assets/images/p3-1.jpeg", "/assets/images/p3-2.jpeg"],

      price: "10000",
      brand: "우리점",
      rating: "4.9",
      numReviews: 3,
      stock: 0,
      description: "재미있는 책 ",
    },
    {
      name: "오늘의 요리",
      slug: "cooking-today",
      category: "Track Pants",
      images: ["/assets/images/p4-1.jpeg", "/assets/images/p4-2.jpeg"],
      price: "4000",
      brand: "the born korea",
      rating: "3.6",
      numReviews: 5,
      stock: 10,
      description: "오늘의 요리는 오늘의 요리를 소개합니다. 맛있는 요리를 만들어보세요",
    },
  ],
};

export default sampleData;
