import React from 'react'

const AIReport = ({ report }) => {
  if (!report) return null;

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{ color: '#2c3e50' }}>Code Review Report</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Overall Quality:</strong>
        <p>{report.quality}</p>
      </div>

      <hr />

    
      <div>
        <strong>Bugs Identified:</strong>
        <ul>
          {report.bugs && report.bugs.map((bug, index) => (
            <li key={index} style={{ color: 'red' }}>{bug}</li>
          ))}
        </ul>
      </div>

    
      <div>
        <strong>Recommended Test Cases:</strong>
        <ul>
          {report.testCases && report.testCases.map((test, index) => (
            <li key={index}>{test}</li>
          ))}
        </ul>
      </div>

  
      <div>
        <strong>Improvement Suggestions:</strong>
        <ul>
          {report.suggestions && report.suggestions.map((tip, index) => (
            <li key={index} style={{ color: 'green' }}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIReport
