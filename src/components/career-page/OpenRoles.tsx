import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
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

const roleItemConfig = {
  styles: {
    container: 'border rounded-lg p-4 hover:shadow-md transition-shadow',
    header: 'flex justify-between items-start',
    title: 'text-xl font-semibold mb-2',
    metaInfo: 'flex flex-wrap gap-4 text-sm text-gray-600',
    toggleButton:
      'bg-[#020089] text-white px-4 py-2 rounded hover:bg-[#0300a9] transition-colors flex items-center min-w-[100px]',
    details: 'mt-4 pt-4 border-t',
    sectionTitle: 'font-semibold',
    list: 'list-disc pl-5',
    applyButton:
      'bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors',
  },
};

const RoleItem: React.FC<RoleItemProps> = ({
  role,
  isOpen,
  onToggle,
  onApply,
}) => {
  const { styles } = roleItemConfig;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{role.title}</h3>
          <div className={styles.metaInfo}>
            <span className="flex items-center">
              <Briefcase size={16} className="mr-1" /> {role.department}
            </span>
            <span className="flex items-center">
              <MapPin size={16} className="mr-1" /> {role.location}
            </span>
            <span>{role.type}</span>
          </div>
        </div>
        <button onClick={onToggle} className={styles.toggleButton}>
          {isOpen ? 'Close' : 'View Details'}
          {isOpen ? (
            <ChevronUp className="ml-2" size={16} />
          ) : (
            <ChevronDown className="ml-2" size={16} />
          )}
        </button>
      </div>
      {isOpen && (
        <div className={styles.details}>
          {renderAboutGiri()}
          {renderSection('What You’ll Do', role.responsibilities)}
          {renderSection("What We're Looking For", role.requirements)}
          {role.niceToHave &&
            renderSection('Nice-to-Have Skills', role.niceToHave)}
          {role.perks && renderSection('Why Join Giri', role.perks)}
          <div className="mb-4">
            <h4 className={styles.sectionTitle}>How to Apply:</h4>
            <p>{role.applicationInstructions}</p>
          </div>
          <button onClick={onApply} className={styles.applyButton}>
            Apply Now
          </button>
        </div>
      )}
    </div>
  );

  function renderSection(title: string, items: string[]) {
    return (
      <div className="mb-4">
        <h4 className={styles.sectionTitle}>{title}:</h4>
        <ul className={styles.list}>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
};

function renderAboutGiri() {
  return (
    <section className="mb-6">
      <p className="pb-5">
        Are you passionate about empowering small businesses and showcasing
        African craftsmanship to the world? Join GirToday, an exciting
        e-commerce startup connecting African artisans with international
        customers. We're seeking a talented Backend Engineer to take ownership
        of our backend services that powers the platform and help us scale our
        impact.
      </p>
      <h2 className="text-xl font-semibold mb-2">About Giri</h2>
      <p>
        Giri is on a mission to bridge the gap between African small and
        medium-scale businesses and global markets. Our e-commerce platform
        enables talented craftspeople to share their unique creations with
        customers worldwide, fostering economic growth and cultural exchange.'
      </p>
    </section>
  );
}

const openRolesConfig = {
  styles: {
    container: 'max-w-4xl mx-auto p-6',
    title: 'text-3xl font-bold mb-6 text-center',
    filters: 'mb-6 flex flex-col sm:flex-row gap-4',
    searchContainer: 'relative flex-grow',
    searchInput: 'w-full p-2 pl-10 border rounded-md',
    searchIcon: 'absolute left-3 top-2.5 text-gray-400',
    filterSelect: 'p-2 border rounded-md',
    rolesList: 'space-y-4',
    noRoles: 'text-center text-gray-500',
  },
};

export const OpenRolesComponent: React.FC<{ roles?: JobListing[] }> = ({
  roles = openRoles,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [openRoleId, setOpenRoleId] = useState<number | null>(null);
  const [applyingForRole, setApplyingForRole] = useState<JobListing | null>(
    null,
  );

  const { styles } = openRolesConfig;

  const filteredRoles = roles?.filter(
    (role) =>
      role.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'All' || role.department === filter),
  );

  const departments = [
    'All',
    ...new Set(roles?.map((role) => role.department)),
  ];

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
    setApplyingForRole(null);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Open Roles</h2>

      <div className={styles.filters}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search roles..."
            className={styles.searchInput}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className={styles.searchIcon} size={20} />
        </div>
        <select
          className={styles.filterSelect}
          onChange={(e) => setFilter(e.target.value)}
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>
      {filteredRoles?.length === 0 ? (
        <p className={styles.noRoles}>No roles found matching your criteria.</p>
      ) : (
        <div className={styles.rolesList}>
          {filteredRoles?.map((role) => (
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
