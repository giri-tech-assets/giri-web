import React from 'react';

const content = {
  intro:
    "Are you passionate about empowering small businesses and showcasing African craftsmanship to the world? Join GirToday, an exciting e-commerce startup connecting African artisans with international customers. We're seeking a talented Backend Engineer to take ownership of our backend services that powers the platform and help us scale our impact.",
  aboutGiri:
    'Giri is on a mission to bridge the gap between African small and medium-scale businesses and global markets. Our e-commerce platform enables talented craftspeople to share their unique creations with customers worldwide, fostering economic growth and cultural exchange.',
  whyJoinGiri: [
    'Make a real impact: Your work will directly contribute to empowering African artisans and businesses.',
    "Growth opportunity: As an early-stage startup, there's plenty of room for professional development and leadership role.",
    'Collaborative culture: Work with a diverse, passionate team dedicated to making a difference.',
    'Competitive compensation: We offer a salary package commensurate with your experience and skills.',
    'Flexible work arrangements and a culture that values work-life balance.',
  ],
  interest:
    "If you're excited about building technology that empowers communities and brings beautiful African craftsmanship to the world, we want to hear from you! Join us in creating a platform that celebrates creativity, fosters economic opportunities, and connects cultures across continents.",
  apply:
    'To apply, upload your resume to www.giritoday.com/careers or send your resume to jobs@giritoday.com',
};

export const JobCardLayout: React.FC<JobCardLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  );
};

interface Job {
  title: string;
  company: string;
  intro: string;
  aboutCompany: string;
  whyJoin: string[];
  interest: string;
  apply: string;
}

// Define props for JobCardLayout
interface JobCardLayoutProps {
  children: React.ReactNode;
}

// Define props for JobCard
interface JobCardProps {
  job: Job;
}

export const JobCard: React.PropsWithChildren<any> = ({ children }: any) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p>{content.intro}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p>{content.aboutGiri}</p>
        </section>
        {children}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Why Join Giri</h2>
          <ul className="list-disc pl-5">
            {content.whyJoinGiri.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Interested?</h2>
          <p>{content.interest}</p>
        </section>

        <section>
          <p className="font-semibold mb-4">{content.apply}</p>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Apply Now
          </button>
        </section>
      </div>
    </div>
  );
};
