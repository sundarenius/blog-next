'use client';

const TextContent = ({ content }: any) => {
  return (
    <div id="text-content">
      {content.split('<p>').map((c: string) => (
        <p key={Math.random()}>{c.replace('</p>', '')}</p>
      ))}
    </div>
  );
}

export default TextContent;