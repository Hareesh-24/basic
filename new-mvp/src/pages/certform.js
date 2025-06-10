import { useState } from 'react';
import '../styles/components.css';

export default function CertForm() {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    certId: '',
    date: '',
    issuer: '',
    grade: '',
    signature: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>🎓 Smart Certificate Form</h1>

      <div className="grid">
        <form className="card form">
          <label>Holder Name</label>
          <input name="name" onChange={handleChange} />

          <label>Course Name</label>
          <input name="course" onChange={handleChange} />

          <label>Certificate ID</label>
          <input name="certId" onChange={handleChange} />

          <label>Date of Issue</label>
          <input type="date" name="date" onChange={handleChange} />

          <label>Issued By</label>
          <input name="issuer" onChange={handleChange} />

          <label>Grade / Performance</label>
          <input name="grade" onChange={handleChange} />

          <label>Authorized Signature</label>
          <input name="signature" onChange={handleChange} />
        </form>

        <div className="card preview">
          <h2>Certificate Preview</h2>
          <p><strong>Holder:</strong> {formData.name || '---'}</p>
          <p><strong>Course:</strong> {formData.course || '---'}</p>
          <p><strong>Certificate ID:</strong> {formData.certId || '---'}</p>
          <p><strong>Issued on:</strong> {formData.date || '---'}</p>
          <p><strong>Issued by:</strong> {formData.issuer || '---'}</p>
          <p><strong>Grade:</strong> {formData.grade || '---'}</p>
          <p><strong>Signature:</strong> {formData.signature || '---'}</p>
        </div>
      </div>
    </div>
  );
}
