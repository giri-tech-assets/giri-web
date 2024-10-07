// import { useState } from 'react';
// import { Search, MapPin, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
// import OpenRolesAccordion from './OpenRolesAccordion';
// import ApplyForRoleForm from './ApplyForm';


// interface HiringManager {
//   name: string;
//   email: string;
//   phone: string;
// }

// interface RoleItemProps {
//   role: Role;
//   isOpen: boolean;
//   onToggle: () => void;
//   onApply: () => void;
// }

// interface Role {
//   id: number;
//   title: string;
//   department: string;
//   location: string;
//   type: string;
//   description: string;
//   requirements: string[];
//   hiringManager: HiringManager;
// }

// const openRoles: Role[] = [
//   {
//     id: 1,
//     title: 'Frontend Developer',
//     department: 'Engineering',
//     location: 'Remote',
//     type: 'Full-time',
//     description: "We're looking for a skilled frontend developer to join our team.",
//     requirements: ["3+ years of experience", "Proficiency in React", "Strong problem-solving skills"],
//     hiringManager: {
//       name: "Jane Doe",
//       email: "jane.doe@company.com",
//       phone: "(123) 456-7890"
//     }
//   },
//   {
//     id: 2,
//     title: 'UX Designer',
//     department: 'Design',
//     location: 'New York, NY',
//     type: 'Full-time',
//     description: "Join our design team to create intuitive and engaging user experiences.",
//     requirements: ["Portfolio demonstrating UX/UI skills", "Experience with design tools (Figma, Sketch)", "User research experience"],
//     hiringManager: {
//       name: "John Smith",
//       email: "john.smith@company.com",
//       phone: "(098) 765-4321"
//     }
//   },
//   {
//     id: 3,
//     title: 'Product Manager',
//     department: 'Product',
//     location: 'San Francisco, CA',
//     type: 'Full-time',
//     description: "Seeking an experienced product manager to lead our product development efforts.",
//     requirements: ["3+ years of product management experience", "Strong communication skills", "Agile methodology expertise"],
//     hiringManager: {
//       name: "John Smith",
//       email: "john.smith@company.com",
//       phone: "(098) 765-4321"
//     }
//   },
//   {
//     id: 4,
//     title: 'Data Analyst',
//     department: 'Data Science',
//     location: 'Remote',
//     type: 'Contract',
//     description: "Join our data science team to analyze and interpret complex data sets.",
//     requirements: ["Proficiency in Python or R", "Experience with data visualization tools (Matplotlib, Tableau)", "Knowledge of SQL databases"],
//     hiringManager: {
//       name: "Alice Johnson",
//       email: "XXXXXXXXXXXXXXXXXXXXXXXXX",
//       phone: "(0000000000000"
//     }
//   },
//   {
//     id: 5,
//     title: 'DevOps Engineer',
//     department: 'Engineering',
//     location: 'Austin, TX',
//     type: 'Full-time',
//     description: "We're looking for a skilled DevOps engineer to join our team.",
//     requirements: ["5+ years of experience", "Proficiency in AWS or Azure", "Strong problem-solving skills"],
//     hiringManager: {
//       name: "Alice Johnson",
//       email: "XXXXXXXXXXXXXXXXXXXXXXXXX",
//       phone: "(0000000000000"
//     }
//   }
// ];

// const RoleItem: React.FC<RoleItemProps> = ({ role, isOpen, onToggle, onApply }) => {
//   return (
//     <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
//       <div className="flex justify-between items-start">
//         <div>
//           <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
//           <div className="flex flex-wrap gap-4 text-sm text-gray-600">
//             <span className="flex items-center">
//               <Briefcase size={16} className="mr-1" /> {role.department}
//             </span>
//             <span className="flex items-center">
//               <MapPin size={16} className="mr-1" /> {role.location}
//             </span>
//             <span>{role.type}</span>
//           </div>
//         </div>
//         <button
//           onClick={onToggle}
//           className="bg-[#020089] text-white px-4 py-2 rounded hover:bg-[#0300a9] transition-colors flex items-center"
//         >
//           {isOpen ? 'Close' : 'View Details'}
//           {isOpen ? <ChevronUp className="ml-2" size={16} /> : <ChevronDown className="ml-2" size={16} />}
//         </button>
//       </div>
//       {isOpen && (
//         <div className="mt-4 pt-4 border-t">
//           <p className="mb-4">{role.description}</p>
//           <div className="mb-4">
//             <h4 className="font-semibold">Requirements:</h4>
//             <ul className="list-disc pl-5">
//               {role.requirements.map((req, idx) => (
//                 <li key={idx}>{req}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="mb-4">
//             <h4 className="font-semibold">Hiring Manager:</h4>
//             <p>{role.hiringManager.name}</p>
//             <p>Email: {role.hiringManager.email}</p>
//             <p>Phone: {role.hiringManager.phone}</p>
//           </div>
//           <button
//             onClick={onApply}
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
//           >
//             Apply Now
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export const OpenRolesComponent: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('All');
//   const [openRoleId, setOpenRoleId] = useState<number | null>(null);
//   const [applyingForRole, setApplyingForRole] = useState<Role | null>(null);

//   const filteredRoles = openRoles.filter(role =>
//     role.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//     (filter === 'All' || role.department === filter)
//   );

//   const departments = ['All', ...new Set(openRoles.map(role => role.department))];

//   const handleToggle = (id: number) => {
//     setOpenRoleId(openRoleId === id ? null : id);
//   };

//   const handleApply = (role: Role) => {
//     setApplyingForRole(role);
//   };

//   const handleCloseForm = () => {
//     setApplyingForRole(null);
//   };

//   const handleSubmitApplication = (formData: any) => {
//     // Here you would typically send the form data to your backend
//     console.log('Submitting application:', formData);
//     // Close the form after submission
//     setApplyingForRole(null);
//     // You might want to show a success message to the user here
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6 text-center">Open Roles</h2>

//       <div className="mb-6 flex flex-col sm:flex-row gap-4">
//         <div className="relative flex-grow">
//           <input
//             type="text"
//             placeholder="Search roles..."
//             className="w-full p-2 pl-10 border rounded-md"
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//         </div>
//         <select
//           className="p-2 border rounded-md"
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           {departments.map(dept => (
//             <option key={dept} value={dept}>{dept}</option>
//           ))}
//         </select>
//       </div>

//       {filteredRoles.length === 0 ? (
//         <p className="text-center text-gray-500">No roles found matching your criteria.</p>
//       ) : (
//         <div className="space-y-4">
//           {filteredRoles.map(role => (
//             <RoleItem
//               key={role.id}
//               role={role}
//               isOpen={openRoleId === role.id}
//               onToggle={() => handleToggle(role.id)}
//               onApply={() => handleApply(role)}
//             />
//           ))}
//         </div>
//       )}

//       {applyingForRole && (
//         <ApplyForRoleForm
//           roleTitle={applyingForRole.title}
//           onClose={handleCloseForm}
//           onSubmit={handleSubmitApplication}
//         />
//       )}
//     </div>
//   );
// };

import React, { useState } from 'react';
import { Search, MapPin, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import ApplyForRoleForm from './ApplyForm';
import {
  backendEngineerJob,
  productManagerJob,
  frontendEngineerJob,
  productDesignerJob,
} from './data';


export interface JobListing {
  id: number;
  title: string;
  company: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  perks?: string[];
  applicationInstructions: string;
}

interface RoleItemProps {
  role: JobListing;
  isOpen: boolean;
  onToggle: () => void;
  onApply: () => void;
}

const openRoles: JobListing[] = [
  backendEngineerJob,
  productManagerJob,
  frontendEngineerJob,
  productDesignerJob,
];

const RoleItem: React.FC<RoleItemProps> = ({ role, isOpen, onToggle, onApply }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="flex items-center">
              <Briefcase size={16} className="mr-1" /> {role.department}
            </span>
            <span className="flex items-center">
              <MapPin size={16} className="mr-1" /> {role.location}
            </span>
            <span>{role.type}</span>
          </div>
        </div>
        <button
          onClick={onToggle}
          className="bg-[#020089] text-white px-4 py-2 rounded hover:bg-[#0300a9] transition-colors flex items-center"
        >
          {isOpen ? 'Close' : 'View Details'}
          {isOpen ? <ChevronUp className="ml-2" size={16} /> : <ChevronDown className="ml-2" size={16} />}
        </button>
      </div>
      {isOpen && (
        <div className="mt-4 pt-4 border-t">
          <p className="mb-4">{role.description}</p>
          <div className="mb-4">
            <h4 className="font-semibold">Responsibilities:</h4>
            <ul className="list-disc pl-5">
              {role.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Requirements:</h4>
            <ul className="list-disc pl-5">
              {role.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
          {role.niceToHave && (
            <div className="mb-4">
              <h4 className="font-semibold">Nice-to-Have Skills:</h4>
              <ul className="list-disc pl-5">
                {role.niceToHave.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
          {role.perks && (
            <div className="mb-4">
              <h4 className="font-semibold">Why Join Us:</h4>
              <ul className="list-disc pl-5">
                {role.perks.map((perk, idx) => (
                  <li key={idx}>{perk}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="mb-4">
            <h4 className="font-semibold">How to Apply:</h4>
            <p>{role.applicationInstructions}</p>
          </div>
          <button
            onClick={onApply}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Apply Now
          </button>
        </div>
      )}
    </div>
  );
};

export const OpenRolesComponent: React.FC<{ roles?: JobListing[] }> = ({ roles=openRoles }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [openRoleId, setOpenRoleId] = useState<number | null>(null);
  const [applyingForRole, setApplyingForRole] = useState<JobListing | null>(null);

  const filteredRoles = roles?.filter(role =>
    role.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === 'All' || role.department === filter)
  );

  const departments = ['All', ...new Set(roles?.map(role => role.department))];

  const handleToggle = (id: number) => {
    setOpenRoleId(openRoleId === id ? null : id);
  };

  const handleApply = (role: JobListing) => {
    setApplyingForRole(role);
  };

  const handleCloseForm = () => {
    setApplyingForRole(null);
  };

  const handleSubmitApplication = (formData: any) => {
    console.log('Submitting application:', formData);
    setApplyingForRole(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Open Roles</h2>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search roles..."
            className="w-full p-2 pl-10 border rounded-md"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <select
          className="p-2 border rounded-md"
          onChange={(e) => setFilter(e.target.value)}
        >
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>
      {filteredRoles?.length === 0 ? (
        <p className="text-center text-gray-500">No roles found matching your criteria.</p>
      ) : (
        <div className="space-y-4">
          {filteredRoles?.map(role => (
            <RoleItem
              key={role.id}
              role={role}
              isOpen={openRoleId === role.id}
              onToggle={() => handleToggle(role.id)}
              onApply={() => handleApply(role)}
            />
          ))}
        </div>
      )}

      {applyingForRole && (
        <ApplyForRoleForm
          roleTitle={applyingForRole.title}
          onClose={handleCloseForm}
          onSubmit={handleSubmitApplication}
        />
      )}
    </div>
  );
};

export default OpenRolesComponent;
