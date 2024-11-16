import { useEffect, useState } from 'react';

function VisitorCounter() {
  const [visitCount, setVisitCount] = useState(null);

  useEffect(() => {
    // Fetch visitor count from the API route
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/visitor-counter');
        const data = await response.json();
        setVisitCount(data.count);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchCount();
  }, []); // Empty dependency array to run only on the first render

  return (
    <div>
      <h1>You are Visitor No: {visitCount !== null ? visitCount : 'Loading...'}</h1>
    </div>
  );
}

export default VisitorCounter;
