import React, { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import TimeDisplay from '../components/TimeDisplay';


export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    certId: '',
    date: '',
    issuer: '',
    grade: '',
    signature: '',
  });
  const [prompt, setPrompt] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
  setLoading(true);
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setReply(data.reply);
  } catch (err) {
    setReply('Error contacting AI');
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="container">
      <h1>🎓 Smart Certificate Generator</h1>
      <ThemeToggle />
      <TimeDisplay />

      <div className="grid">
        {/* Form Section */}
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

        {/* Preview Section */}
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
    

        <div className="chat-box">
  <h2>Ask the AI 🤖</h2>
  <input
    type="text"
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}
    placeholder="Type your question"
  />
  <button onClick={handleSubmit} disabled={loading}>
    {loading ? 'Thinking...' : 'Ask'}
  </button>
  {reply && (
    <div className="reply">
      <strong>AI:</strong> <p>{reply}</p>
    </div>
  )}
</div>


    </div>
  );
}
