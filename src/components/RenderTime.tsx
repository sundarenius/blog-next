'use client';

const RenderTime = ({ created }: any) => {
  return (
    <div id="time-container" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
      Published: {created}
    </div>
  );
}

export default RenderTime;