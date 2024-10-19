import React, { useState } from 'react';
import { X } from 'lucide-react';
import { sendSignupRequest } from '@/hooks/useWaitlistSignup';
import { VisitorType } from '@/hooks/useGetVisitorType';

interface ApplyForRoleProps {
  roleTitle: string;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  resume: File | null;
  coverLetter: string;
}

const formConfig = {
  styles: {
    overlay:
      'fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4',
    modal:
      'bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto',
    header: 'flex justify-between items-center mb-4',
    title: 'text-xl font-bold',
    closeButton: 'text-gray-500 hover:text-gray-700',
    form: 'space-y-4',
    inputContainer: 'w-full p-2 border rounded',
    label: 'block mb-1 font-medium',
    submitButton:
      'w-full bg-[#020089] text-white py-2 px-4 rounded hover:bg-[#0300a9] transition-colors',
  },
  fields: [
    { name: 'fullName', label: 'Full Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'phone', label: 'Phone', type: 'tel' },
    {
      name: 'resume',
      label: 'Resume',
      type: 'file',
      accept: '.pdf,.doc,.docx',
    },
    { name: 'coverLetter', label: 'Cover Letter', type: 'textarea', rows: 4 },
  ],
  submitButtonText: 'Submit Application',
};

export const ApplyForRoleForm: React.FC<ApplyForRoleProps> = ({
  roleTitle,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);

    convertFileToBase64(formData.resume!).then((base64Resume) =>
      sendSignupRequest({
        email: formData.email,
        type: VisitorType.Buyer,
        coverLetter: formData.coverLetter,
        resume: base64Resume,
        name: formData.fullName,
      }),
    );
  };

  const renderField = (field: (typeof formConfig.fields)[0]) => {
    const commonProps = {
      id: field.name,
      name: field.name,
      required: true,
      className: formConfig.styles.inputContainer,
    };

    if (field.type === 'textarea') {
      return (
        <textarea
          {...commonProps}
          value={formData[field.name as keyof FormData] as string}
          onChange={handleInputChange}
          rows={field.rows}
          required={false}
        />
      );
    } else if (field.type === 'file') {
      return (
        <input
          {...commonProps}
          type={field.type}
          onChange={handleFileChange}
          accept={field.accept}
        />
      );
    } else {
      return (
        <input
          {...commonProps}
          type={field.type}
          value={formData[field.name as keyof FormData] as string}
          onChange={handleInputChange}
        />
      );
    }
  };

  return (
    <div className={formConfig.styles.overlay}>
      <div className={formConfig.styles.modal}>
        <div className={formConfig.styles.header}>
          <h2 className={formConfig.styles.title}>Apply for {roleTitle}</h2>
          <button onClick={onClose} className={formConfig.styles.closeButton}>
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className={formConfig.styles.form}>
          {formConfig.fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className={formConfig.styles.label}>
                {field.label}
              </label>
              {renderField(field)}
            </div>
          ))}
          <button type="submit" className={formConfig.styles.submitButton}>
            {formConfig.submitButtonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForRoleForm;

const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
