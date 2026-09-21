import React from 'react';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPostsData } from '../../data/blogPosts';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-sbr-blue-50 px-3.5 py-1.5 rounded-full text-xs font-bold text-sbr-blue">
            <BookOpen className="w-4 h-4" />
            <span>Guías & Actualidad Inmobiliaria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Últimas Publicaciones & Consejos de Expertos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Mantente informado con nuestros artículos sobre financiamiento, tendencias del mercado en Chile y consejos para rentabilizar tu propiedad.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sbr-card hover:shadow-sbr-hover transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col border border-slate-100 group cursor-pointer"
            >
              {/* Image with Category Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3.5 left-3.5 bg-sbr-orange text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow">
                  {post.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Meta info */}
                  <div className="flex items-center space-x-4 text-xs text-slate-400 font-medium">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-sbr-blue" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-sbr-blue" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sbr-blue transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer read more */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sbr-orange group-hover:text-sbr-orange-hover">
                  <span>Por {post.author}</span>
                  <div className="flex items-center space-x-1">
                    <span>Leer más</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
