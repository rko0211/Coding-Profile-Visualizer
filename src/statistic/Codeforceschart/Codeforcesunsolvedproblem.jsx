import React from 'react'

function Codeforcesunsolvedproblem({ data1 }) {
  const mymap = new Map();
  for (let i = data1[2].result.length - 1; i >= 0; i--) {
    const item = data1[2].result[i];
    if (item.verdict !== "OK") {

      if (mymap.get(item.problem.name) !== -1)
        // Unsolved
        mymap.set(item.problem.name, 0);
    }
    else {
      mymap.set(item.problem.name, -1);
    }
  }
  const myset = new Set();
  mymap.forEach((val, key) => {
    if (val === 0) {
      myset.add(key);
    }
  })
  // console.log(myset);
  const myset2 = new Set();

  for (let i = data1[2].result.length - 1; i >= 0; i--) {
    const item = data1[2].result[i];
    if (myset.has(item.problem.name)) {
      const s1 = String(item.problem.contestId);
      const s2 = String(item.problem.index);
      myset2.add((s1 + "-" + s2));
      myset.delete(item.problem.name);

    }
  }

  // console.log(myset2);
  const mySet2Obj = [];
  myset2.forEach((val) => {
    // Extract the number (everything before the dash)
    const number = val.split('-')[0];

    // Extract the last character (after the dash)
    const lastChar = val.split('-')[1];
    mySet2Obj.push({
      title: val,
      link: `https://codeforces.com/problemset/problem/${number}/${lastChar}`
    });
  });
  return (
    <div style={styles.container} className='my-16'>
      <h1 style={styles.heading}>Unsolved Problems</h1>
      <p style={styles.count}>Total Problems: {myset2.size}</p>
      <div style={styles.listContainer}>
        {[...mySet2Obj].map((problem, index) => (

          <a
            key={index}
            href={problem.link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.problemBox}

          >
            <span className='text-blue-600'>{problem.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}


// Inline styles for the component
const styles = {
  container: {
    padding: '20px',
    margin: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '16px',
    marginBottom: '16px'
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  count: {
    textAlign: 'center',
    color: '#666',
    fontSize: '18px',
    marginBottom: '20px',
  },
  listContainer: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap', // Wrap elements if they overflow
    justifyContent: 'center',
    alignItems: 'center',
  },
  problemBox: {
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
    color: '#333',
    textDecoration: 'none', // Remove underline from links
    textAlign: 'center',
    flex: '1 1 calc(25% - 20px)', // Each box takes up 25% width with spacing
    maxWidth: 'calc(25% - 20px)', // Limit max-width to 25%
  },
};

export default Codeforcesunsolvedproblem