import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [visitCount, setVisitCount] = useState(null);

  useEffect(() => {
    async function fetchVisitCount() {
      try {
        const response = await fetch('/api/visitor-counter');
        if (response.ok) {
          const data = await response.json();
          setVisitCount(data.count);
        } else {
          console.error('Failed to fetch visit count');
        }
      } catch (error) {
        console.error('Error fetching visit count:', error);
      }
    }

    fetchVisitCount();
  }, []);

  return (
    <div>
      {/* <h1>You are Visitor No: {visitCount !== null ? visitCount : 'Loading...'}</h1> */}
    </div>
  );
}
