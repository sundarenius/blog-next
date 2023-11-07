'use client';

const RenderTime = ({ created }: any) => {
  return (
    <div id="time-container" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
      Published: {new Date(created).toISOString().toString().replace('T', ' ').substring(0, 19)}
    </div>
  );
}

export default RenderTime;