import React, { useState } from 'react';
import { useNotification } from '../hooks/useNotification';
import Button from '../components/common/Button';
import FormInput from '../components/common/FormInput';

export default function BulkOrderPage() {
  const { showSuccess, showError } = useNotification();
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    requirements: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mdkzwnzr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          organization_name: formData.organizationName,
          contact_person: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          requirements: formData.requirements,
          timeline: formData.timeline,
          _subject: `New Bulk Order from ${formData.organizationName}`,
        }),
      });

      if (response.ok) {
        showSuccess('Bulk order request submitted! We will contact you soon.');
        setFormData({
          organizationName: '',
          contactPerson: '',
          email: '',
          phone: '',
          requirements: '',
          timeline: ''
        });
      } else {
        showError('Failed to submit request. Please try again.');
      }
    } catch (error) {
      console.error('Formspree Error:', error);
      showError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page active">
      <div className="container" style={{ paddingTop: '2rem' }}>
        <h1>Bulk Orders</h1>
        <p>Special pricing for educational institutions and businesses. Get customized quotes for large volume orders.</p>
        
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Organization Name"
            type="text"
            value={formData.organizationName}
            onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
            required
          />
          <FormInput
            label="Contact Person"
            type="text"
            value={formData.contactPerson}
            onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
            required
          />
          <FormInput
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <FormInput
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />
          <div className="form-group">
            <label className="form-label">Product Requirements</label>
            <textarea
              className="form-control"
              rows={4}
              placeholder="Please describe your requirements, quantities needed, and any specific technical specifications"
              value={formData.requirements}
              onChange={(e) => setFormData({...formData, requirements: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Expected Delivery Timeline</label>
            <select
              className="form-control"
              value={formData.timeline}
              onChange={(e) => setFormData({...formData, timeline: e.target.value})}
              required
            >
              <option value="">Select Timeline</option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="3-4 weeks">3-4 weeks</option>
              <option value="1-2 months">1-2 months</option>
              <option value="3+ months">3+ months</option>
            </select>
          </div>
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </form>
      </div>
    </div>
  );
}