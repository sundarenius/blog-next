'use client';

const TextContent = ({ content }: any) => {
  return (
    <div id="text-content">
      <div style={{ marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default TextContent;