import React from 'react';
import './BlogSection.css';

const posts = [
  {
    title: 'Bağışınız Hayatları Nasıl Değiştiriyor?',
    excerpt: 'Desteğinizin dünya çapında aileler ve çocuklar üzerindeki gerçek etkisini keşfedin.',
    img: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Gönüllü Hikayeleri: Fark Yaratmak',
    excerpt: 'Her gün hayatları değiştiren gönüllülerimizin ilham verici hikayelerini okuyun.',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
  },
];

const BlogSection = () => (
  <section className="blog-section">
    <h2>Son Haberler</h2>
    <div className="blog-cards">
      {posts.map((post, idx) => (
        <div className="blog-card" key={idx}>
          <img src={post.img} alt={post.title} />
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BlogSection; 