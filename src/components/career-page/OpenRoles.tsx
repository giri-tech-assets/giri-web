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
import { Linkify } from '../common/Linkify';

export interface JobListing {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  perks?: string[];
  salary: string;
  teamLike?: {
    description: string;
    items: string[];
  };
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
    title: 'text-xl font-semibold',
    metaInfo: 'flex flex-wrap gap-4 text-sm text-gray-600',
    toggleButton:
      'bg-[#020089] text-white px-4 py-2 rounded hover:bg-[#0300a9] transition-colors flex items-center min-w-[100px]',
    details: 'mt-4 pt-4 border-t',
    sectionTitle: 'font-semibold mb-2 text-xl',
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
          {renderAboutGiri({
            salary: role.salary,
            aboutTheRoleBlob: role.description,
            teamLike: role.teamLike,
          })}
          {renderSection('In this role, you’ll', role.responsibilities)}
          {renderSection('Qualifications', role.requirements)}
          {renderFootNotes()}
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
        <h2 className={styles.sectionTitle}>{title}:</h2>
        <ul className={styles.list}>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
};

interface AboutSection {
  salary: string;
  aboutTheRoleBlob: string;
  teamLike?: JobListing['teamLike'];
}
function renderAboutGiri({ salary, aboutTheRoleBlob, teamLike }: AboutSection) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">About Giri</h2>
      <p className="pb-5">
        GiriToday is a global marketplace for unique and creative goods. We
        build, power, and evolve the tools and technologies that connect
        millions of African sellers with millions of buyers around the world. As
        a GiriToday employee, you will tackle unique, meaningful, and
        large-scale problems alongside passionate coworkers, all the while
        making a rewarding impact with both our sellers and buyers community. At
        GiriToday, our sellers sell the product while we tell the stories..
      </p>
      <div className="flex flex-row">
        <p className="font-bold pr-3 mb-2">Salary Range: </p>
        <p>{salary}</p>
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-5">What’s the role?</h2>
      <p>{aboutTheRoleBlob}</p>

      {teamLike && (
        <>
          <h2 className="text-xl font-semibold mb-2 mt-5">
            What's this team like at Giri
          </h2>
          <p>
            {teamLike.description} <br />
            <br />
          </p>
        </>
      )}

      <ul className={roleItemConfig.styles.list}>
        {teamLike?.items?.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function renderFootNotes() {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2 mt-5">What's Next:</h2>
      <p>
        If you're interested in joining the team at GiriToday, please share your
        resume with us and feel free to include a cover letter if you'd like.
        GiriToday is a place that values individuality and variety. We don't
        want you to be like everyone else -- we want you to be like you! So tell
        us what you're all about.
      </p>
      <h2 className="text-xl font-semibold mb-2 mt-5">Our Promise:</h2>
      <p className="mt-4">
        At GiriToday, we believe that a diverse, equitable and inclusive
        workplace furthers relevance, resilience, and longevity. We encourage
        people from all backgrounds, ages, abilities, and experiences to apply.
        GiriToday is proud to be an equal opportunity workplace. We are
        committed to equal employment opportunities regardless of race, color,
        ancestry, religion, sex, national origin, sexual orientation, age,
        citizenship, marital status, disability, gender identity or Veteran
        status.
      </p>
      <div className=" mt-5">
        <Linkify
          text={
            'To apply, upload your resume to www.giritoday.com/careers or send your resume to jobs@giritoday.com or Click Apply Below. We look forward to meeting you!'
          }
          linkClassName="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors duration-300"
        />
      </div>
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
  const [openRoleId, setOpenRoleId] = useState<string | null>(null);
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

  const handleToggle = (id: string) => {
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
              key={role.title}
              role={role}
              isOpen={openRoleId === role.title}
              onToggle={() => handleToggle(role.title)}
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
