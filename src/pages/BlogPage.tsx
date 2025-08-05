import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Evolving Landscape of Cybersecurity Threats in 2025',
      excerpt: 'Stay ahead of emerging cybersecurity threats with our analysis of the current threat landscape and predictions for the coming year.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      author: 'I. SAKHO',
      date: 'May 15, 2025',
      category: 'Cybersecurity',
    },
    {
      id: 2,
      title: 'Best Practices for IT Project Management in the Digital Age',
      excerpt: 'Discover how to optimize your IT project management processes to ensure successful outcomes in today\'s rapidly evolving digital landscape.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      author: 'Ousmane Ndiaye',
      date: 'April 28, 2025',
      category: 'Project Management',
    },
    {
      id: 3,
      title: 'Implementing Zero Trust Architecture: A Step-by-Step Guide',
      excerpt: 'Learn how to implement a zero trust security model in your organization to enhance your overall security posture and protect against modern threats.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      author: 'Marie Diop',
      date: 'April 10, 2025',
      category: 'Security Architecture',
    },
    {
      id: 4,
      title: 'The Role of AI in Modern Cybersecurity Defense',
      excerpt: 'Explore how artificial intelligence is transforming cybersecurity defense mechanisms and helping organizations stay ahead of sophisticated threats.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      author: 'Sophie Mensah',
      date: 'March 22, 2025',
      category: 'AI & Security',
    },
    {
      id: 5,
      title: 'Securing Your Remote Workforce: Challenges and Solutions',
      excerpt: 'Address the unique security challenges posed by remote work arrangements and implement effective solutions to protect your distributed workforce.',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      author: 'I. SAKHO',
      date: 'March 5, 2025',
      category: 'Remote Security',
    },
    {
      id: 6,
      title: 'GDPR Compliance: What You Need to Know in 2025',
      excerpt: 'Stay up-to-date with the latest GDPR requirements and ensure your organization maintains compliance with evolving data protection regulations.',
      image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      author: 'Marie Diop',
      date: 'February 18, 2025',
      category: 'Compliance',
    },
  ];

  const categories = [
    'Cybersecurity',
    'Project Management',
    'Security Architecture',
    'AI & Security',
    'Remote Security',
    'Compliance',
    'Digital Transformation',
    'Risk Management',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-blue-100">
              Insights, advice, and updates from our cybersecurity and IT project management experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <div 
                    key={post.id} 
                    className="bg-white rounded-lg shadow-lg overflow-hidden border-b border-gray-200 flex flex-col"
                    style={{ 
                      animationDelay: `${index * 100}ms`, 
                      animationFillMode: 'both',
                      animationName: 'fadeInUp',
                      animationDuration: '0.8s' 
                    }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                      />
                      <span className="absolute top-4 right-4 bg-teal-400 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-blue-900 mb-3 hover:text-blue-600 transition-colors">
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center text-gray-500 text-sm mt-auto">
                        <div className="flex items-center">
                          <User size={16} className="mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="mx-2">•</div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <a 
                        href={`/blog/${post.id}`} 
                        className="text-blue-900 font-medium hover:text-blue-600 transition-colors flex items-center"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-current="page"
                    className="relative inline-flex items-center px-4 py-2 border border-blue-500 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative hidden md:inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-blue-900 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="text-gray-600 hover:text-blue-600 flex items-center justify-between transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded-full text-xs font-medium">
                          {Math.floor(Math.random() * 20) + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <li key={post.id} className="flex gap-3">
                      <div className="w-16 h-16 flex-shrink-0">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-900 hover:text-blue-600 transition-colors">
                          <a href={`/blog/${post.id}`}>{post.title}</a>
                        </h4>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subscribe */}
              <div className="bg-blue-900 rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-blue-100 mb-4">
                  Stay updated with the latest insights and news from our experts.
                </p>
                <form>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-md focus:outline-none text-gray-800"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-teal-400 text-blue-900 font-medium rounded-md hover:bg-teal-300 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;